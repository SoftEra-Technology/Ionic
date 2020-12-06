import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {AuditResponce} from '../Model/AuditResponse';
import {Store} from '../Model/Store'
import { Platform, ToastController } from '@ionic/angular';
import {StoreResponse} from '../Model/StoreResponse '
import {UserLoginService } from '../Service/user-login.service'
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-open-audit',
  templateUrl: './open-audit.page.html',
  styleUrls: ['./open-audit.page.scss'],
})
export class OpenAuditPage implements OnInit {

  databaseObj: SQLiteObject;
  readonly database_name:string = "AUDIT_DB.db"; // DB name
  auditResponce: AuditResponce;
  storeResponse: StoreResponse;
  store: Store;

 row_data : any [];
 row_store: any [];
  constructor(

    private platform: Platform,
    public sqlite: SQLite,
      //public database:SQLiteObject,
      public userService: UserLoginService,
      public router: Router,
      private screenOrientation: ScreenOrientation
      
  ) { 
    this.store= new Store()
    this.platform.ready().then(() => {
      this.setLandscape();
      this.createDB();
     
    }).catch(error => {
      console.log(error);
    });


  }

  
  setLandscape(){
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  


  createDB() {
    console.log("database created");
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        //alert('audit Database Created!');
        this.getRows();
        
        
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
    }

    getRows() {
      this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
        .then((res) => {
          this.row_data = [];
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.row_data.push(res.rows.item(i));

              //alert( this.row_data[i].toString())
              console.log(this.row_data[i].EMP_ID.toString());
              
            }
            this.fetchAttemptedOpenAuditByUser(this.row_data[0].EMP_ID.toString())
          }
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
    }

AttemptedOpenAuditByUser : any [];
  public fetchAttemptedOpenAuditByUser( _sUserId: String) {
  
    this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,AUDIT_STATUS," +
    "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID) AS TOTALQUESTION," +
    "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID AND QUESTION_STATUS<>'Open') AS ATTEMPTQUESTION," +
    "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND IS_INCLUDED='Yes') AS AUDIT_POINTS," +
    "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND QUESTION_STATUS<>'Open'),0) MARKS_SCORED," +
    "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Open'", [])
    .then((res) => {
      this.AttemptedOpenAuditByUser = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.AttemptedOpenAuditByUser.push(res.rows.item(i));
          
        }
        return this.AttemptedOpenAuditByUser;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
  
   
  
    
  }
 

  ngOnInit() {
    this.setLandscape();
  }
  objecta:any;
  OenAudit_Page_setting(lAttemptedId:Number, lAuditId: Number, lStoreId: Number) {
    this.objecta="";
     this.objecta = {
      AttemptedId: lAttemptedId,
      AuditId: lAuditId,
      Storeid: lStoreId,
     
      }
   

      
  }
  GoToAuditList()
  {

    this.router.navigate(['/list-audit'],{
      queryParams: {
         value : JSON.stringify(this.objecta)
        },
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

  DeleteAudit()
  {
    alert(this.objecta.AttemptedId);
    console.log(" attempted id fot delete"+ this.objecta.AttemptedId)
    this.deletAttemptedAuditById(Number(this.objecta.AttemptedId));


  }

  deletAttemptedAuditById(attemtedId: Number) {
    debugger;

    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
   
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
   
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
   
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_RECIVING_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
    
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
  
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_OPTION WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
  
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
    
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
  
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
  
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
  
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
    
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
  
    this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);
      window.location.reload();
    
    }).catch(e => {alert("error " + JSON.stringify(e))});
   


    //kjkljkl
//  this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_SECTION", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

// this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_PREDEFINED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});


  }  

}
