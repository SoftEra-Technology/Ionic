import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import {UserLoginService} from '../Service/user-login.service'
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-list-audit',
  templateUrl: './list-audit.page.html',
  styleUrls: ['./list-audit.page.scss'],
})
export class ListAuditPage implements OnInit {
  databaseObj: SQLiteObject;
  readonly database_name:string = "AUDIT_DB.db"; // DB name
  Query_data:any;
  show_Section: boolean = false;
    show_Question: any= -1 ;
    myImgUrl:string='../../assets/red_lock_48.png';
    AuditStore: any;

AuditDate: any;

  constructor(
    public userService: UserLoginService,
    public router: Router,
    private network: Network,
    private platform: Platform,
    public sqlite: SQLite,
    public activatedRoute : ActivatedRoute,
    private screenOrientation: ScreenOrientation

  ) { 

    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
       this.Query_data =<any>JSON.parse(res.value);
       console.log("list page");
       console.log(this.Query_data.AttemptedId);
       this.setLandscape()
       
       if(String(this.Query_data.refresh)==="yes")
       {
          //window.location.reload();
       }
       this.createDB();
       //this.fetchAttemptedAuditForStore(Number(this.Query_data.AuditId), String(this.Query_data.Storeid));
       //this.fetchAttemptedSection(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId))
              
       
  });
    this.platform.ready().then(() => {
      this.createDB();
      this.setLandscape()
    }).catch(error => {
      console.log(error);
    });
  }

  setLandscape(){
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  GotoQuestionChoice(lAttemptedId: Number, lSectionid:Number, IQuestion_Id:Number)
  {

    let objecta = {
      AttemptedId: lAttemptedId,
      AuditId: this.Query_data.AuditId,
      SectionId:lSectionid,
      QuestionID: IQuestion_Id,
      Store_id: this.AuditStore,
     
      }
   

      this.router.navigate(['/audit-choice-question'],{
        queryParams: {
           value : JSON.stringify(objecta)
          },
        });

  }


  ngOnInit() {
    this.setLandscape();
  }

  createDB() {
    console.log("database created");
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
       
        this.databaseObj = db;
        this.fetchAttemptedAuditForStore(Number(this.Query_data.AuditId), String(this.Query_data.Storeid));
        this.fetchAttemptedSection(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId))
        //alert('audit Database Created!');
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
    }

    AttemptedAuditForStore: any [];
public fetchAttemptedAuditForStore(lAuditId: Number, _sStoreCode:String) {
 
  this.databaseObj.executeSql("SELECT * from AUDIT_ATTEMPTED_TB where AUDIT_ID=" + lAuditId + " AND STR_CODE='" + _sStoreCode + "' ORDER BY ATTEMPTED_ID DESC", [])
  .then((res) => {
    this.AttemptedAuditForStore = [];
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        this.AttemptedAuditForStore.push(res.rows.item(i));
        
      }
      
      this.AuditStore = this.AttemptedAuditForStore[0].STR_NAME;
      this.AuditDate = this.AttemptedAuditForStore[0].AUDIT_DT;
      
    }
    //this.router.navigate(['dash-board']);
  })
  .catch(e => {
    console.log("error " + JSON.stringify(e))
  });


}
  
  AttemptedSection: any [];
  public fetchAttemptedSection(lAttemptedId:Number, lAuditId:Number)  {
   

   debugger;
    
    this.databaseObj.executeSql("SELECT B.SECTION_NAME AS P_SECTION_NAME,A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.PARENT_SECTION_ID,A.SECTION_NAME,A.SECTION_DESC,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
    "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID " +
    "AND QUESTION_STATUS<>'Open')+(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID " +
    "AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
    "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes') AS SECTION_MARKS," +
    "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
    "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
    "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
    "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.S_QUESTION_COUNT>0", [])
    .then((res) => {
      this.AttemptedSection = [];
      debugger;
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.AttemptedSection.push(res.rows.item(i));
          
        }
        console.log("section akshay")
        console.log(this.AttemptedSection);
        if(this.Query_data.refresh=="yes")
        {
           //window.location.reload();
        }
      }
      
    })
    .catch(e => {
      console.log("error " + JSON.stringify(e))
    });
  
  }
  
  AttemptedAuditBySQL: any [];
  public fetchAttemptedAuditBySQL(lAttemptedId: Number, lAuditId: Number) {
  
   
            this.databaseObj.executeSql("SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " +
            "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId, [])
            .then((res) => {
              this.AttemptedAuditBySQL = [];
              console.log(res);
              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  this.AttemptedAuditBySQL.push(res.rows.item(i));
                  
                }
                return this.AttemptedAuditBySQL;
              }
              //this.router.navigate(['dash-board']);
            })
            .catch(e => {
              alert("error " + JSON.stringify(e))
            });
   
  }
  AttemptedSectionQuestionBySQL: any [];
  public fetchAttemptedSectionQuestionBySQL(sType: string, lAttemptedId: Number, lAuditId: Number, lId: Number)  {
   debugger;
  
    if ("Audit"==sType) {
      this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
      "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
      "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
      "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId, [])
      .then((res) => {
        this.AttemptedSectionQuestionBySQL = [];
        debugger;
        console.log(res);
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
            
          }
         
        }
        //this.router.navigate(['dash-board']);
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  
  
       
  
  
    } else if ("Section"==sType) {
      this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
      "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
      "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
      "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.SECTION_ID=" + lId, [])
            .then((res) => {
              this.AttemptedSectionQuestionBySQL = [];
              console.log(res);
              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  this.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
                  
                }
                debugger;
               
              }
              //this.router.navigate(['dash-board']);
            })
            .catch(e => {
              alert("error " + JSON.stringify(e))
            });
    
    } else if ("Question"==sType) {
      this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
      "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
      "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
      "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId, [])
            .then((res) => {
              this.AttemptedSectionQuestionBySQL = [];
              console.log(res);
              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  this.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
                  
                }
                //return this.AttemptedAuditBySQL;
              }
              //this.router.navigate(['dash-board']);
            })
            .catch(e => {
              alert("error " + JSON.stringify(e))
            });
       
    } else {
      this.databaseObj.executeSql( "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
      "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
      "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
      "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND 1=2", [])
            .then((res) => {
              this.AttemptedSectionQuestionBySQL = [];
              console.log(res);
              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  this.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
                  
                }
                //return this.AttemptedAuditBySQL;
              }
              //this.router.navigate(['dash-board']);
            })
            .catch(e => {
              alert("error " + JSON.stringify(e))
            });
       
    }
  
   
    if (this.AttemptedSectionQuestionBySQL.length>0) {
      return this.AttemptedSectionQuestionBySQL;
    }
    
  }
  
  AttemptedQuestionBySQL : any [];
  public fetchAttemptedQuestionBySQL(lAttemptedId: Number, lAuditId:Number, lSectionId: Number)  {
   debugger;
   
    if(this.show_Question===lSectionId) 
    {
      this.show_Question=-1;
    }
   else
    {
      this.show_Question=lSectionId;
    }
  
    console.log(lAttemptedId);
    console.log("Entered in fetched question");
    this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID,QUESTION_ORDER," +
    "CASE WHEN IS_INCLUDED='Yes' THEN QUESTION_MARKS ELSE 0 END AS QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED,IS_CRITICAL " +
    "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
    "AND SECTION_ID=" + lSectionId + " ORDER BY QUESTION_ORDER", [])
          .then((res) => {
            this.AttemptedQuestionBySQL = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.AttemptedQuestionBySQL.push(res.rows.item(i));
                
              }
                for(var j=0; j<this.AttemptedQuestionBySQL.length; j++)
                {
                  
                  this.AttemptedQuestionBySQL[j].QUESTION_NAME=String(this.AttemptedQuestionBySQL[j].QUESTION_NAME).replace(/'/g, "");
                }
                console.log("------------------------------------------");
                debugger;
                console.log(this.AttemptedQuestionBySQL);

              return this.AttemptedQuestionBySQL;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            alert("error " + JSON.stringify(e))
          });
  }
  
  GoToDashboard()
  {
    //this.router.navigate(['dash-board']);

    this.router.navigate(['/dash-board'],{
      queryParams: {
         value : "refresh"
        },
      });
  
  }

  Repace_string(Data:String)
  {
debugger;
return Data.replace(/'/g, "");
  }



}
