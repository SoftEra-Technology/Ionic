import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {AuditResponce} from '../Model/AuditResponse';
import {Store} from '../Model/Store'
import { Platform, ToastController } from '@ionic/angular';
import {StoreResponse} from '../Model/StoreResponse '
import {UserLoginService } from '../Service/user-login.service'
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import {FormGroup,FormControl} from '@angular/forms'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-new-audit',
  templateUrl: './new-audit.page.html',
  styleUrls: ['./new-audit.page.scss'],
})
export class NewAuditPage implements OnInit {
  form_NewAudit: FormGroup;
  myDate: String = new Date().toISOString();
  databaseObj: SQLiteObject;
  readonly database_name:string = "AUDIT_DB.db"; // DB name
  User_data: any [];
  constructor(

    private platform: Platform,
    public sqlite: SQLite,
      //public database:SQLiteObject,
      public userService: UserLoginService,
      public router: Router,
      public navCtrl: NgxNavigationWithDataComponent,
      private screenOrientation: ScreenOrientation
      
  ) { 
    //this.store= new Store()
    this.platform.ready().then(() => {
      this.createDB();
      this.unlockScreen()
      //this.setLandscape()
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
   // this.getUser();
  this.form_NewAudit = new FormGroup({
    Audit_Select: new FormControl(''),
    Audit_Store: new FormControl(''),
    Audit_Manager : new FormControl(''),
    Auditor_Name: new FormControl(''),
    Audit_date: new FormControl('')





  })

  }
  unlockScreen(){
    // allow user rotate
    this.screenOrientation.unlock();
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
        this.getUser();
        this.getstore();
        this.fetchAllAudits();
        
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
    }

    getUser() {
     
      this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
        .then((res) => {
          this.User_data = [];
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.User_data.push(res.rows.item(i));

              //alert( this.row_data[i].toString())
             
            }
            console.log("User Data on New Audit")
            console.log(this.User_data);
          }
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
    }
    row_store: any[];
    getstore():void {
      
      this.databaseObj.executeSql("SELECT * FROM STORE_TB", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.row_store.push(res.rows.item(i));
              
            }
          }
          console.log("store on New Audit")
              console.log(this.row_store);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
    }
    AllAudits: any [];  
public fetchAllAudits() {

  this.databaseObj.executeSql("SELECT * FROM AUDIT_TB", [])
  .then((res) => {
    this.AllAudits = [];
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        this.AllAudits.push(res.rows.item(i));
        
      }
      console.log("All Audit data");
      console.log(this.AllAudits);
    }
    //this.router.navigate(['dash-board']);
  })
  .catch(e => {
    alert("error " + JSON.stringify(e))
  });
}
Exit_New_Audit()
{
  this.router.navigate(['dash-board']);
  
}
seledcted_audit: any;

onChange_Audit(selectedId: number)
{
   this.seledcted_audit = this.AllAudits.find((x: any) => x.AUDIT_ID == selectedId); 
   alert(this.seledcted_audit["AUDIT_ID"]);
   alert(this.seledcted_audit["AUDIT_NAME"]);
}
seledcted_Store: any;

onChange_Store(selectedId: number)
{
   this.seledcted_Store = this.row_store.find((x: any) => x.STR_CODE == selectedId); 
   alert(this.seledcted_Store["STR_CODE"]);
   alert(this.seledcted_Store["STR_NAME"]);
}
seledcted_Store1: any;
 store_id : any;
Next_New_Audit(item: any)
{

 
  var store_name;
  var audit_id;
  var audit_name;
//alert("next new audit");

  // this.seledcted_Store1 = this.row_store.find((x: any) => x.STR_CODE == this.form_NewAudit.get('STR_CODE').value); 
  // alert(this.seledcted_Store1["STR_CODE"]);
  // alert(this.seledcted_Store1["STR_NAME"]);

   this.store_id=  this.form_NewAudit.get('Audit_Store').value;


   for( var i=0; i<=this.row_store.length-1; i++)
   {
        if(this.row_store[i].STR_CODE==this.store_id)
        {

          store_name= this.row_store[i].STR_NAME;
          console.log(this.store_id)
          console.log(store_name)
        }




   }
  //  this.seledcted_audit = this.AllAudits.find((x: any) => x.AUDIT_ID == selectedId); 
  //  alert(this.seledcted_audit["AUDIT_ID"]);
  //  alert(this.seledcted_audit["AUDIT_NAME"]);
 audit_id = this.form_NewAudit.get('Audit_Select').value;
 console.log(audit_id)
   for( var i=0; i<=this.AllAudits.length-1; i++)
   {
        if(this.AllAudits[i].AUDIT_ID==audit_id)
        {

          audit_name= this.AllAudits[i].AUDIT_NAME;
          console.log(this.AllAudits[i].AUDIT_ID)
          console.log(audit_name);
        }


   }

   console.log( this.form_NewAudit.get('Audit_date').value);
   console.log( this.form_NewAudit.get('Audit_Manager').value);
   

let user_id=this.User_data[0].EMP_ID;
//console.log(user_id);

  //this.router.navigate(['list-audit']);
  //this.navCtrl.navigate('list-audit', {Name:"virendta"});
this.createAttemptedAudit(audit_id.toString(), audit_name.toString(), this.store_id.toString(), store_name.toString(),
 user_id.toString(), this.form_NewAudit.get('Audit_Manager').value.toString(), this.form_NewAudit.get('Audit_date').value.toString(), "Open", "1", "")

}





public createAttemptedAudit(sAuditID:String, sAuditName:String, sStrCode:String, sStrName:String, sUserId:String, sStrManager:String, sAuditDt:String, sAuditStatus:String, sUniqueId:String, sAuditFindings:String) {
  
  this.databaseObj.executeSql( "INSERT INTO AUDIT_ATTEMPTED_TB(AUDIT_ID, AUDIT_NAME, STR_CODE, STR_NAME, USER_ID,STR_MANAGER, AUDIT_DT, AUDIT_STATUS,UNIQUE_ID,AUDIT_FINDINGS ) " +
  "VALUES(" + sAuditID + ",'" + sAuditName + "','" + sStrCode + "','" + sStrName + "','" + sUserId + "','" + sStrManager + "','" + sAuditDt + "','" + sAuditStatus +  "','" + sUniqueId +  "','" + sAuditFindings + "')", [])
  .then((res) => {
    console.log(res); 
    this.fetchAttemptedAuditForStore(Number(sAuditID), sStrCode);
    //return true;
  }).catch(e => {console.log("error " + JSON.stringify(e))});
  console.log("createAttempted Audit created");
}

AttemptedAuditForStore: any [];
public fetchAttemptedAuditForStore(lAuditId: Number, _sStoreCode:String) {
  this.databaseObj.executeSql("SELECT * FROM AUDIT_ATTEMPTED_TB where AUDIT_ID=" + lAuditId + " AND STR_CODE='" + _sStoreCode + "' ORDER BY ATTEMPTED_ID DESC", [])
  .then((res) => {
    this.AttemptedAuditForStore = [];
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        this.AttemptedAuditForStore.push(res.rows.item(i));
        
      }
          console.log("Audit Inserted in the Audit list");
          console.log(this.AttemptedAuditForStore);

      this.createAttemptedSectionBySQL(Number(this.AttemptedAuditForStore[0].ATTEMPTED_ID), Number(lAuditId))
      this.createAttemptedQuestionBySQL(Number(this.AttemptedAuditForStore[0].ATTEMPTED_ID), Number(lAuditId))
      //return this.AttemptedAuditForStore;
    }
    //this.router.navigate(['dash-board']);
  })
  .catch(e => {
    console.log("error " + JSON.stringify(e))
  });


}
createAttemptedSectionBySQL(lAttemptedId: Number, lAuditId:Number) {

  this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME,SECTION_DESC,SECTION_ORDER,SECTION_PT," +
  "T_QUESTION_COUNT,QUESTION_ANSWERED,S_QUESTION_COUNT,C_QUESTION_COUNT) SELECT " + lAttemptedId + ",AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME," +
  "SECTION_DESC,SECTION_ORDER,SECTION_PT,T_QUESTION_COUNT,'',S_QUESTION_COUNT,C_QUESTION_COUNT FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {console.log("error " + JSON.stringify(e))});

  console.log("createAttemptedQuestion section");
}

createAttemptedQuestionBySQL(lAttemptedId:Number, lAuditId: Number) {

  this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER," +
  "IS_CRITICAL,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IMAGE_NAME,IS_INCLUDED,IMAGE_PUSHED) SELECT " +
  lAttemptedId + ",AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER," +
  "IS_CRITICAL,QUESTION_MARKS,0,'Open','','','Yes','Yes' FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId, [])
  .then((res) => {console.log(res); 
   
    let objecta = {
      AttemptedId: lAttemptedId,
      AuditId: lAuditId,
      Storeid: this.store_id,
     
      }
   

      this.router.navigate(['/list-audit'],{
        queryParams: {
           value : JSON.stringify(objecta)
          },
        });
    //this.navCtrl.navigate('list-audit', {AttemptedId:lAttemptedId})
    return true;}).catch(e => {console.log("error " + JSON.stringify(e))});

  console.log("createAttemptedQuestion created");
}

Reload_page()
{

  window.location.reload();
}


}
