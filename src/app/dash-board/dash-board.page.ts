import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {AuditResponce} from '../Model/AuditResponse';
import {Store} from '../Model/Store'
import { Platform, ToastController } from '@ionic/angular';
import {StoreResponse} from '../Model/StoreResponse '
import {UserLoginService } from '../Service/user-login.service'
import { Router, ActivatedRoute } from '@angular/router';
import {NetworkServiceService} from '../Service/network-service.service'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {LoaderServiceService} from '../Service/loader-service.service'
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.page.html',
  styleUrls: ['./dash-board.page.scss'],
})
export class DashBoardPage implements OnInit {
  databaseObj: SQLiteObject;
  readonly database_name:string = "AUDIT_DB.db"; // DB name
  auditResponce: AuditResponce;
  storeResponse: StoreResponse;
  store: Store;
  Connection_Status: boolean;
 row_data : any [];
 row_store: any [];
 showSpinner:boolean=false;
 Query_data:any;
  constructor(

    private platform: Platform,
    public sqlite: SQLite,
      //public database:SQLiteObject,
      public userService: UserLoginService,
      public router: Router,
      public networkServiceService: NetworkServiceService,
      private screenOrientation: ScreenOrientation,
      private ionLoader: LoaderServiceService,
      public activatedRoute : ActivatedRoute
      
  ) { 
    
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.setPortrait();
      // console.log(JSON.parse(res.value));
      //  this.Query_data =<any>JSON.parse(res.value);
      //  console.log("list page");
      //  console.log(this.Query_data.AttemptedId);
      //  debugger;
      //  if(String(this.Query_data.refresh)==="yes")
      //  {
      //     //window.location.reload();
      //  }
      //  this.createDB();
      //  //this.fetchAttemptedAuditForStore(Number(this.Query_data.AuditId), String(this.Query_data.Storeid));
       //this.fetchAttemptedSection(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId))
              
       
  });
    this.store= new Store()
    this.platform.ready().then(() => {
      this.setPortrait()
      this.createDB();
      //this.unlockScreen();
      
    }).catch(error => {
      console.log(error);
    });

    
  }
  showLoader() {
    this.ionLoader.showLoader();
 
     setTimeout(() => {
       this.hideLoader();
     }, 128000);
  }
 
  hideLoader() {
    this.ionLoader.hideLoader();
    window.location.reload();
  }
  setPortrait(){
    // set to portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  unlockScreen(){
    // allow user rotate
    //this.screenOrientation.unlock();
  }
  check_status: any;
checkconnection_serve()
{

  
  this.check_status= this.networkServiceService.getCurrentNetworkStatus();

//alert(this.check_status);



}
  logoff()
  {
    this.router.navigate(['home']);

  }
GotoNewAudit()
{

  this.router.navigate(['new-audit']);

}

GotoCloseAudit()
{

  this.router.navigate(['close-audit']);

}

GotoOpenAudit()
{

  this.router.navigate(['open-audit']);

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
        this.CreateAllTables();
        this.create_storetable()
        this.fetchAttemptedOpenAuditCount();
        
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
              console.log(this.row_data[i].toString());
            }
            

          }
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
    }


  ngOnInit() {
    this.setPortrait();
    
  }

//Get Sync
 async Get_Sync()
{

  this.checkconnection_serve()

var audit_count= this.fetchAttemptedOpenAuditCount()
    console.log("Total Count AttemptedOpen AuditCount");
    console.log(this.Count_AttemptedOpenAuditCount);
    console.log(this.Count_AttemptedOpenAuditCount[0].CNT);
    if(this.Count_AttemptedOpenAuditCount[0].CNT===0)
    {
      if(this.check_status===0)
    {
        this.get_all_store_api();
        
        this.Delelete_All_data()
       
        this.Get_AllAudit();
       this.showLoader();
    }
    else
    {
      if(this.check_status===1)
      {
        alert("Please Check Connection");
      }

    }

    }
    else
    {

      alert("Please Close Open Audit");
    }
    
        
}
yser_ss : any;
  Get_AllAudit()
{
   // console.log("auditor id: " +this.row_data[0].EMP_ID)
    var Auditor_id=this.row_data[0].EMP_ID.toString();
    console.log("auditor id: " +Auditor_id)
    try
    {
   this.userService.Get_Audit_By_Auditor(Auditor_id).subscribe(response => {
    //this.yser_ss= <JSON>response
    console.log(response);
    //this.user_detail = new UserData;
    this.yser_ss = response;
     console.log(this.yser_ss.Audits[0].AuditName);
     console.log(this.yser_ss.Audits[0].AuditId);
     if(this.yser_ss.Audits.length>0)
     {
       var tempVariable = this.yser_ss;
      // this.showLoader();
      for(var i=0; i<=this.yser_ss.Audits.length-1; i++)
      {
              console.log(this.yser_ss);
              this.Get_all_Audit_with_question(tempVariable.Audits[i].AuditId)
      }
      //this.hideLoader();

     }
    
          
     
      
    });
  }
  catch(error)
  {

    alert("Please Check Connection");
  }

}
AuditById_data: any;
Audit: any;
Get_all_Audit_with_question(AuditID:String)
{

try
{

  return this.userService.Get_Audit_By_Id(AuditID).subscribe(response => {
    //this.yser_ss= <JSON>response
    //console.log("get audit by id");
    //this.user_detail = new UserData;
    this.auditResponce = <AuditResponce>response;
   


  // console.log(typeof(this.auditResponce));
   //console.log(typeof(this.auditResponce.Audt.AuditId));
   this.datafrom_server();
     
   
          
   
      
    });
  }
  catch(error)
  {

    alert("Please Check Connection");
  }
}
  datafrom_server()
{
  console.log("NEW AUDIT iNSERTION");
  console.log(this.auditResponce);
   console.log(this.auditResponce.StatusFl);

  // console.log(this.Audit);
  // console.log(this.auditResponce);
  // console.log(this.auditResponce.Audt.AuditId);
  // console.log(this.auditResponce.Audt.Sections[0].SectionName);
  // console.log("Question Name");
  // console.log(this.auditResponce.Audt.Sections[0].Questions[0].QuestionName);
  // console.log("Question type");
  // console.log(this.auditResponce.Audt.Sections[0].Questions[0].QuestionType);
  // console.log(this.auditResponce.Audt.Sections[0].Questions[0].YesNo[0].ChoiceId);
  // console.log(this.auditResponce.Audt.Sections[0].Questions[0].YesNo[0].Marks);
//create Audit  
  this.createAudit(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.AuditName,
  this.auditResponce.Audt.AuditTypeId.toString(), this.auditResponce.Audt.AuditType,
  this.auditResponce.Audt.AuditStage, this.auditResponce.Audt.AuditPoints.toString(), this.auditResponce.Audt.QuestionCount.toString());
    
    if(this.auditResponce.Audt.Sections.length>0)
    {
      for(var i=0; i<=this.auditResponce.Audt.Sections.length-1; i++)
      {

        //create section
        this.createSection(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(),
        this.auditResponce.Audt.Sections[i].ParentSectionId.toString(), this.auditResponce.Audt.Sections[i].SectionName,
        this.auditResponce.Audt.Sections[i].SectionDesc, this.auditResponce.Audt.Sections[i].SectionOrder.toString(), this.auditResponce.Audt.Sections[i].SectionPoint.toString(),
        this.auditResponce.Audt.Sections[i].TQuestionCount.toString(),this.auditResponce.Audt.Sections[i].QuestionCount.toString(),
        this.auditResponce.Audt.Sections[i].CQuestionCount.toString());
        if(this.auditResponce.Audt.Sections[i].Questions.length>0)
        {
            
            for(var j=0; j<=this.auditResponce.Audt.Sections[i].Questions.length-1; j++)
            {

             
                    this.createQuestion(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(),
                    this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(),this.auditResponce.Audt.Sections[i].Questions[j].QuestionTypeId.toString(),
                    this.auditResponce.Audt.Sections[i].Questions[j].QuestionName.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionType,
                    this.auditResponce.Audt.Sections[i].Questions[j].QuestionOrder.toString(), this.auditResponce.Audt.Sections[i].Questions[j].IsNC, this.auditResponce.Audt.Sections[i].Questions[j].QuestionPoint.toString());

                    console.log("insering question");
                    console.log(this.auditResponce.Audt.Sections[i].Questions[j].QuestionName);
                    console.log(this.auditResponce.Audt.Sections[i].Questions[j].QuestionType);
                  
                    if(this.auditResponce.Audt.Sections[i].Questions[j].QuestionType=="Choice" && this.auditResponce.Audt.Sections[i].Questions[j].Choice.length>0)
                    {
                          for (var d = 0; d < this.auditResponce.Audt.Sections[i].Questions[j].Choice.length-1; d++) {
                      
                        this.createQChoice(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(),
                        this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(),this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].ChoiceId.toString(),
                        this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].Choice, this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].Marks.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].Comments.toString(),
                        this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].IsNegative);
                    }

                    }
                   
                    if(this.auditResponce.Audt.Sections[i].Questions[j].QuestionType=="Yes/No" && this.auditResponce.Audt.Sections[i].Questions[j].YesNo.length>0)
                    {
                      for (var e = 0; e < this.auditResponce.Audt.Sections[i].Questions[j].YesNo.length-1; e++) {
                      
                        this.createQChoice(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(),
                        this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(),this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].ChoiceId.toString(),
                        this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].Choice, this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].Marks.toString(), this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].Comments,
                        this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].IsNegative);
                       }
                     }
                  
                    if(this.auditResponce.Audt.Sections[i].Questions[j].QuestionType=="Standard" && this.auditResponce.Audt.Sections[i].Questions[j].Standard.Id!=0)
                    {
                      this.createQStandard(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.Id.toString(),
                      this.auditResponce.Audt.Sections[i].Questions[j].Standard.Type, this.auditResponce.Audt.Sections[i].Questions[j].Standard.MinRange, this.auditResponce.Audt.Sections[i].Questions[j].Standard.MaxRange,
                      this.auditResponce.Audt.Sections[i].Questions[j].Standard.Fix,this.auditResponce.Audt.Sections[i].Questions[j].Standard.UoM,this.auditResponce.Audt.Sections[i].Questions[j].Standard.Field,
                      this.auditResponce.Audt.Sections[i].Questions[j].Standard.Multiple);
                      if(this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues.length>0)
                      {
                            for (var c = 0; c < this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues.length-1; c++) {
                         
                               this.createQStandardPreDefined(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.Id.toString(),
                                this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues[c].Id.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues[c].Name.toString());
                            }
                        }
                     }//if standared
                  }// for Question  
                   
                  }
            }

    }


}



CreateAllTables()
{
  
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
  "AUDIT_NAME text not null,AUDIT_TYPE_ID integer not null,AUDIT_TYPE text not null,AUDIT_STAGE text not null,AUDIT_PT integer not null," +
  "QUESTION_COUNT integer not null);",[]).then(() => {console.log('Table Audit Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS SECTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
  "SECTION_ID integer not null,PARENT_SECTION_ID integer not null,SECTION_NAME text not null,SECTION_DESC text not null," +
  "SECTION_ORDER integer not null,SECTION_PT integer not null,T_QUESTION_COUNT integer not null,S_QUESTION_COUNT integer not null,"+
  "C_QUESTION_COUNT integer not null);",[]).then(() => {console.log('Table section Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS QUESTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
  "SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_TYPE_ID integer not null,QUESTION_NAME text not null," +
  "QUESTION_TYPE text not null,QUESTION_ORDER integer not null,IS_CRITICAL text not null,QUESTION_MARKS integer not null);",[]).then(() => {console.log('Table section Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS QUESTION_CHOICE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
  "SECTION_ID integer not null,QUESTION_ID integer not null,CHOICE_ID integer not null,CHOICE_TEXT text not null,POINTS integer not null," +
  "COMMENTS_REQUIRED text not null,IS_NEGATIVE text not null);",[]).then(() => {console.log('Table QUESTION_CHOICE_TB Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
 this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_STANDARD_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
 "SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null,STANDARD_TYPE text not null,MIN_RANGE text," +
 "MAX_RANGE text,FIX text,UOM text,FIELD_LABEL text,IS_PREDEFINED text);",[]).then(() => {console.log('Table QUESTION_STANDARD_TB Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS QUESTION_STANDARD_PREDEFINED_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
  "SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null,VALUE_ID integer not null,VALUE_NAME text not null);",[]).then(() => {console.log('Table section Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_OPTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
  "SECTION_ID integer not null,QUESTION_ID integer not null,OPTION_ID integer not null,OPTION_TEXT text not null,SCORABLE_FL text not null);",[]).then(() => {console.log('Table section Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
 this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_RANGE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
 "SECTION_ID integer not null,QUESTION_ID integer not null,RANGE_ID integer not null,MIN_RANGE text not null,MAX_RANGE text not null," +
 "POINTS integer not null,COMMENTS_REQUIRED text not null);",[]).then(() => {console.log('Table QUESTION_STANDARD_PREDEFINED_TB Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
 this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_FIELDS_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
 "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,FIELD_NAME text not null,FIELD_TYPE text not null," +
 "ISKEY text not null,ISSCORABLE text not null);",[]).then(() => {console.log('Table QUESTION_FIELDS_TB Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
 this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS FIELDS_VALUE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
 "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,VALUE_ID not null,VALUE_NAME text not null,DEFAULT_VALUE text not null);",[]).then(() => {console.log('Table section Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS FIELDS_CHOICE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
  "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,CHOICE_ID not null,CHOICE_TEXT text not null," +
  "CHOICE_PT integer not null);",[]).then(() => {console.log('Table FIELDS_VALUE_TB Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_TB(ATTEMPTED_ID integer primary key autoincrement," +
  "AUDIT_ID integer not null,AUDIT_NAME text not null,STR_CODE text not null,STR_NAME text not null,USER_ID text not null," +
  "STR_MANAGER text not null,AUDIT_DT text not null,AUDIT_STATUS text not null,UNIQUE_ID text not null,AUDIT_FINDINGS text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_TB Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID integer not null,AUDIT_ID integer not null," +
  "SECTION_ID integer not null,PARENT_SECTION_ID integer not null,SECTION_NAME text not null,SECTION_DESC text not null,"+
  "SECTION_ORDER integer not null,SECTION_PT integer not null,T_QUESTION_COUNT integer not null,QUESTION_ANSWERED integer not null,"+
  "S_QUESTION_COUNT integer not null,C_QUESTION_COUNT integer not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_SECTION Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID integer not null,AUDIT_ID integer not null,"+
  "SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_TYPE_ID integer not null,QUESTION_NAME text not null," +
  "QUESTION_TYPE text not null,QUESTION_ORDER integer not null,IS_CRITICAL text not null,QUESTION_MARKS integer not null,MARKS_SCORED integer not null," +
  "QUESTION_STATUS text not null,QUESTION_COMMENT text not null,IMAGE_NAME text not null,IS_INCLUDED text not null,IMAGE_PUSHED text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTIONS Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_CHOICE(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,CHOICE_ID integer not null," +
  "CHOICE_TEXT text not null,POINTS integer not null,COMMENTS text,CHOICE_VALUE text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTIONS_CHOICE Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_STANDATD(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null," +
  "FIELD_VALUE text,COMMENTS text,CHOICE_VALUE text,POINTS integer not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTIONS_STANDATD Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,STANDARD_ID integer not null," +
  "VALUE_ID integer not null,VALUE_NAME text not null,VALUE_OBSERVED text not null,POINTS integer not null,COMMENTS text,CHOICE_VALUE text not null," +
  "IMAGE_NAME text not null,IMAGE_PUSHED text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_OPTION(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,OPTION_ID integer not null," +
  "OPTION_TEXT text not null,OPTION_TEXT_VALUE text not null,POINTS integer not null,ISSCORABLE text);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTIONS_OPTION Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_RANGE(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,RANGE_ID integer not null," +
  "MIN_RANGE text not null,MAX_RANGE text not null,POINTS integer not null,COMMENTS text);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTIONS_RANGE Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_RECIVING_QUESTIONS(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,UNLOAD_START_TIME text," +
  "UNLOAD_END_TIME text,VEHICLE_NO text,TEMPERATURE text);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_RECIVING_QUESTIONS Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_QUESTION_FIELD(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null," +
  "KEY_FIELD_NAME text not null,KEY_FIELD_TYPE text not null,ISKEY text not null,ISSCORABLE text not null,KEY_FIELD_VALUE_ID integer not null," +
  "KEY_FIELD_VALUE text not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTION_FIELD Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null,KEY_FIELD_NAME text not null," +
  "KEY_FIELD_VALUE_ID integer not null,KEY_FIELD_VALUE text not null,OTHER_FIELD_ID integer not null,OTHER_FIELD_NAME text not null," +
  "OTHER_FIELD_TYPE text not null,OTHER_FIELD_ISKEY text not null,OTHER_FIELD_VALUE_ID integer not null,OTHER_FIELD_VALUE text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE Table IF NOT EXISTS AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null,KEY_FIELD_NAME text not null," +
  "KEY_FIELD_VALUE_ID integer not null,KEY_FIELD_VALUE text not null,CHOICE_FIELD_ID integer not null,CHOIC_FIELD_NAME text not null," +
  "CHOICE_FIELD_TYPE text not null,CHOICE_FIELD_ISKEY text not null,CHOICE_ID integer not null,CHOICE_TEXT text not null,CHOICE_PT integer not null,CHECKED Text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ERROR_LOG(ID integer primary key autoincrement,SCREEN_NAME text not null,"+
  "FUNCTION_NAME text not null,EXCEPTION text not null);",[]).then(() => {console.log('Table AUDIT_ERROR_LOG Created!');}).catch(e => { alert("error " + JSON.stringify(e))});
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_IMAGES_TB(ATTEMPTED_ID integer not null," +
  "AUDIT_ID integer not null,STR_CODE text not null,UNIQUE_ID text not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);",[]).then(() => {console.log('Table AUDIT_ATTEMPTED_IMAGES_TB Created!');}).catch(e => { alert("error " + JSON.stringify(e))});

  //this.Delelete_All_data();
}






create_storetable()
{
  this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS STORE_TB(_id integer primary key autoincrement,STR_CODE text not null,STR_NAME text not null);",[])
  .then(() => {
    //alert('Table Created!');
  
  })
  .catch(e => {
    alert("error " + JSON.stringify(e))
  });

}

get_all_store_api()
{
  var Bu_id=this.row_data[0].BU_ID.toString();
  var empid="00"+this.row_data[0].EMP_ID.toString();
  this.store.StrCode= Bu_id;
  this.store.StrName=empid;
  console.log(this.store);
  this.userService.Get_All_Store(this.store).subscribe(response => {
  
 
    this.storeResponse = <StoreResponse>response;
    console.log(this.storeResponse);
     
     if(this.storeResponse.Stores.length>0)
     {
       var tempVariable = this.storeResponse.Stores;
      for(var i=0; i<=this.storeResponse.Stores.length-1; i++)
      {
              console.log(this.yser_ss);
              this.insert_store(this.storeResponse.Stores[i].StrCode, this.storeResponse.Stores[i].StrName)
      }

     }
   
          
   
      
    });


}
insert_store(StrCode: String, StrName: String)
{
 

  this.databaseObj.executeSql("INSERT INTO STORE_TB(STR_CODE,STR_NAME) VALUES('" + StrCode + "','" + StrName + "')",[])
  .then(() => {
    //alert('Store code  inserted !');
    this.getstore()
  })
  .catch(e => {
    alert("error " + JSON.stringify(e))
  });


}

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
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}
deleteStore(){

  this.databaseObj.executeSql("DELETE FROM STORE_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
}
count_AttemptedOpenAuditCount : any [];
AttemptedOpenAuditCount(lAuditId: Number, _sStoreCode: String) {

  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB t WHERE AUDIT_ID=" + lAuditId + " AND AUDIT_STATUS='Open' AND STR_CODE='" + _sStoreCode + "'", [])
  .then((res) => {
    this.row_store = [];
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        this.count_AttemptedOpenAuditCount.push(res.rows.item(i));
        
      }
    }
    //this.router.navigate(['dash-board']);
  })
  .catch(e => {
    alert("error " + JSON.stringify(e))
  });
}

Delelete_All_data()
{
  this.databaseObj.executeSql("DELETE FROM AUDIT_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM SECTION_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_CHOICE_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_RANGE_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_FIELDS_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM FIELDS_VALUE_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM FIELDS_CHOICE_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_OPTION_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_PREDEFINED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});


this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_SECTION", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_PREDEFINED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
}
deleteAudit(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM AUDIT_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});
}

deleteSection(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM SECTION_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});
 
}

deleteQuestion(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM QUESTION_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});

}

deleteQChoice(lAuditId) {
  this.databaseObj.executeSql("DELETE FROM QUESTION_CHOICE_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});
 
}

deleteQOption(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM QUESTION_OPTION_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});
 
}

deleteQRange(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM QUESTION_RANGE_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});

}
deleteQField(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM QUESTION_FIELDS_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});
  
}

deleteQFieldValue(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM FIELDS_VALUE_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});
  
}
deleteQFieldChoice(lAuditId: Number) {
  this.databaseObj.executeSql("DELETE FROM FIELDS_CHOICE_TB WHERE AUDIT_ID="+lAuditId, []).then((res) => {console.log(res); return true;}).catch(e => {alert("error " + JSON.stringify(e))});
  
}

AllAudits: any [];  
public fetchAllAudits() {
  this.databaseObj.executeSql("SELECT *  FROM AUDIT_TB", [])
  .then((res) => {
    this.row_store = [];
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        this.AllAudits.push(res.rows.item(i));
        
      }
      return this.AllAudits;
    }
    //this.router.navigate(['dash-board']);
  })
  .catch(e => {
    alert("error " + JSON.stringify(e))
  });
}

 public createAudit(sAuditID: String, sAuditName: String, sAuditTypeId: String, sAuditTyp: String, sAuditStage: String, sAuditPt: String, sQuestionCnt: String) {
    
  this.databaseObj.executeSql("INSERT INTO AUDIT_TB (AUDIT_ID, AUDIT_NAME,AUDIT_TYPE_ID,AUDIT_TYPE,AUDIT_STAGE,AUDIT_PT, QUESTION_COUNT) " +
          "VALUES(" + sAuditID + ",'" + sAuditName + "'," + sAuditTypeId + ",'" + sAuditTyp + "','" + sAuditStage + "'," + sAuditPt + ","  + sQuestionCnt + ")", []).then((res) => {console.log(res); return true;}).catch(e => {console.log("error " + JSON.stringify(e))});
 

  
}

public createSection(sAuditID: String,sSectionId : String, sParentSectionId: String, sSectionName: String, sSectionDesc: String,
                        sSectionOrder: String, sSectionPt: String, sTQuestionCnt: String, sSQuestionCnt: String, sCQuestionCnt: String) {
   
        this.databaseObj.executeSql("INSERT INTO SECTION_TB(AUDIT_ID, SECTION_ID, PARENT_SECTION_ID, SECTION_NAME, SECTION_DESC, SECTION_ORDER, SECTION_PT, T_QUESTION_COUNT, S_QUESTION_COUNT, C_QUESTION_COUNT ) " +
        "VALUES(" + sAuditID + "," + sSectionId + "," + sParentSectionId + ",'" + sSectionName + "','" + sSectionDesc + "'," + sSectionOrder + "," +  sSectionPt +"," + sTQuestionCnt+"," + sSQuestionCnt+"," + sCQuestionCnt+ ")", []).then((res) => { return true;}).catch(e => {console.log("error " + JSON.stringify(e))});
                         
   
                         


  
}

public createQuestion(sAuditID :String, sSectionId :String, sQuestionId :String, sQuestionTypeId :String,
                         sQuestionName :String, sQuestionType :String, sQuestionOrder :String, sIsCritical :String, sQuestionMarks :String) {
                        
             this.databaseObj.executeSql( "INSERT INTO QUESTION_TB(AUDIT_ID, SECTION_ID, QUESTION_ID, QUESTION_TYPE_ID, QUESTION_NAME, QUESTION_TYPE, QUESTION_ORDER, IS_CRITICAL, QUESTION_MARKS) " +
              "VALUES(" + sAuditID + "," + sSectionId + "," + sQuestionId + "," + sQuestionTypeId + ",'" + sQuestionName + "','" + sQuestionType + "'," +sQuestionOrder +",'" + sIsCritical+"'," + sQuestionMarks+")", []).then((res) => { return true;}).catch(e => {console.log("error " + JSON.stringify(e))});

              // this.databaseObj.executeSql( "INSERT INTO QUESTION_TB(AUDIT_ID, SECTION_ID, QUESTION_ID, QUESTION_TYPE_ID, QUESTION_NAME, QUESTION_TYPE, QUESTION_ORDER, IS_CRITICAL, QUESTION_MARKS) " +
              // "VALUES(" + sAuditID + "," + sSectionId + "," + sQuestionId + "," + sQuestionTypeId + ",'" + sQuestionName + "'," + sQuestionType + "," +
              // "'" + sQuestionOrder +"," + sIsCritical+"," + sQuestionMarks+ "')", []).then((res) => {console.log(res); return true;}).catch(e => {console.log("error " + JSON.stringify(e))});
                                           
                     
  
}

 createQChoice(sAuditId:String, sSectionId:String, sQuestionId:String, sChoiceId:String, sChoiceText:String, sMarks:String, sComntReq:String, sIsNegative:String) {
 
  this.databaseObj.executeSql("INSERT INTO QUESTION_CHOICE_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,CHOICE_ID,CHOICE_TEXT,POINTS,COMMENTS_REQUIRED,IS_NEGATIVE) " +
    "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sChoiceId + ",'" + sChoiceText + "'," + sMarks + ",'" +  sComntReq + "','" + sIsNegative + "')", []).then((res) => { return true;}).catch(e => {console.log("error " + JSON.stringify(e))});
}


AttemptedCompletedAuditByUser: any [];
public fetchAttemptedCompletedAuditByUser(_sUserId: String)  {
  this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,AUDIT_STATUS," +
  "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID) AS TOTALQUESTION," +
  "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID AND QUESTION_STATUS<>'Open') AS ATTEMPTQUESTION," +
  "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND IS_INCLUDED='Yes') AS AUDIT_POINTS," +
  "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND QUESTION_STATUS<>'Open'),0) MARKS_SCORED," +
  "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Close'", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.AttemptedCompletedAuditByUser.push(res.rows.item(i));
              
            }
            return this.AttemptedCompletedAuditByUser;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

 
}
ImageNotPushedAttemptedQuestionBySQL: any [];
public  fetchImageNotPushedAttemptedQuestionBySQL(lAttemptedId: Number, lAuditId: Number) {
  this.databaseObj.executeSql("SELECT AUDIT_ID,SECTION_ID,QUESTION_ID,0 AS KEY_FIELD_VALUE_ID,IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS " +
  "WHERE QUESTION_STATUS='Done' AND ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND IMAGE_PUSHED='No' AND IMAGE_NAME<>'' " +
  "AND IMAGE_NAME<>'null' " +
  "UNION " +
  "SELECT Y.AUDIT_ID,Y.SECTION_ID,Y.QUESTION_ID,X.KEY_FIELD_VALUE_ID,X.IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTION_FIELD X,AUDIT_ATTEMPTED_QUESTIONS Y " +
  "WHERE X.AUDIT_ID=Y.AUDIT_ID AND X.SECTION_ID=Y.SECTION_ID AND X.QUESTION_ID=Y.QUESTION_ID AND Y.QUESTION_STATUS='Done' " +
  "AND X.IMAGE_NAME<>'' AND X.IMAGE_NAME<>'null' AND X.IMAGE_PUSHED='No' AND X.ATTEMPTED_ID=" + lAttemptedId + " AND X.AUDIT_ID=" + lAuditId + " " +
  "UNION " +
  "SELECT Y.AUDIT_ID,Y.SECTION_ID,Y.QUESTION_ID,X.VALUE_ID AS KEY_FIELD_VALUE_ID,X.IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED X,AUDIT_ATTEMPTED_QUESTIONS Y " +
  "WHERE X.AUDIT_ID=Y.AUDIT_ID AND X.SECTION_ID=Y.SECTION_ID AND X.QUESTION_ID=Y.QUESTION_ID AND Y.QUESTION_STATUS='Done' " +
  "AND X.IMAGE_NAME<>'' AND X.IMAGE_NAME<>'null' AND X.IMAGE_PUSHED='No' AND X.ATTEMPTED_ID=" + lAttemptedId + " AND X.AUDIT_ID=" + lAuditId, [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.ImageNotPushedAttemptedQuestionBySQL.push(res.rows.item(i));
              
            }
            return this.ImageNotPushedAttemptedQuestionBySQL;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
 
}
Count_AttemptedOpenAuditCount: any [];
public fetchAttemptedOpenAuditCount() {
  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB WHERE AUDIT_STATUS='Open'", [])
        .then((res) => {
          this.Count_AttemptedOpenAuditCount = [];

          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.Count_AttemptedOpenAuditCount.push(res.rows.item(i));
              
            }
            console.log(this.Count_AttemptedOpenAuditCount);
            return this.Count_AttemptedOpenAuditCount;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });


 
}

deletAttemptedAuditById(attemtedId: Number) {

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

  this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
 
}
AttemptedQuestionBySQL : any [];
public fetchAttemptedQuestionBySQL(lAttemptedId: Number, lAuditId:Number, lSectionId: Number)  {
  this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID,QUESTION_ORDER," +
  "CASE WHEN IS_INCLUDED='Yes' THEN QUESTION_MARKS ELSE 0 END AS QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED,IS_CRITICAL " +
  "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=" + lSectionId + " ORDER BY QUESTION_ORDER", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.AttemptedQuestionBySQL.push(res.rows.item(i));
              
            }
            return this.AttemptedQuestionBySQL;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
}
AttemptedQuestionChoiceBySQL: any [];
public fetchAttemptedQuestionChoiceBySQL(lAttemptedId: Number, lAuditId: Number, lQuestionId:Number)  {
  this.databaseObj.executeSql("SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " +
  "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " +
  "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId, [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.AttemptedQuestionBySQL.push(res.rows.item(i));
              
            }
            return this.AttemptedQuestionBySQL;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });



  
}
AttemptedAuditPrevQuestionBySQL : any [];
public fetchAttemptedAuditPrevQuestionBySQL(lAttemptedId: Number, lSectionId: Number, lAuditId: Number, lQuestionId:Number)  {
  this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," +
  "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " +
  "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM " +
  "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER<(SELECT QUESTION_ORDER " +
  "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.AttemptedAuditPrevQuestionBySQL.push(res.rows.item(i));
              
            }
            return this.AttemptedAuditPrevQuestionBySQL;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

  

  
}
PrevAttemptedSection: any [];
public fetchPrevAttemptedSection(lAttemptedId: Number, lAuditId:Number, lSectionId:Number)  {
  this.databaseObj.executeSql("SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
  "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.SECTION_NAME," +
  "(SELECT QUESTION_NAME FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
  "AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_NAME," +
  "(SELECT QUESTION_TYPE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
  "AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_TYPE FROM AUDIT_ATTEMPTED_SECTION A WHERE A.ATTEMPTED_ID=" + lAttemptedId + " " +
  "AND A.AUDIT_ID=" + lAuditId + " AND A.SECTION_ORDER=(SELECT MAX(SECTION_ORDER) FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
  "AND AUDIT_ID=" + lAuditId + " AND SECTION_ORDER<(SELECT SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
  "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + "))", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.PrevAttemptedSection.push(res.rows.item(i));
              
            }
            return this.PrevAttemptedSection;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });


  }
  AttemptedAuditNextQuestionBySQL: any [];
public  fetchAttemptedAuditNextQuestionBySQL(lAttemptedId :Number, lSectionId:Number, lAuditId:Number, lQuestionId:Number)  {
  this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," +
  "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " +
  "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM " +
  "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER>(SELECT QUESTION_ORDER " +
  "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.AttemptedAuditNextQuestionBySQL.push(res.rows.item(i));
              
            }
            return this.AttemptedAuditNextQuestionBySQL;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });


  
}
NextAttemptedSection: any [];
public fetchNextAttemptedSection(lAttemptedId:Number, lAuditId: Number, lSectionId: Number)  {
  this.databaseObj.executeSql( "SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
  "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.SECTION_NAME," +
  "(SELECT QUESTION_NAME FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
  "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_NAME," +
  "(SELECT QUESTION_TYPE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
  "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_TYPE FROM AUDIT_ATTEMPTED_SECTION A WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " " +
  "AND A.SECTION_ORDER=(SELECT MIN(SECTION_ORDER) FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND PARENT_SECTION_ID=(SELECT PARENT_SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=" + lSectionId + ") AND SECTION_ORDER>(SELECT SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
  "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + ")) AND A.PARENT_SECTION_ID=(" +
  "SELECT PARENT_SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
  "AND SECTION_ID=" + lSectionId + ")", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.NextAttemptedSection.push(res.rows.item(i));
              
            }
            return this.NextAttemptedSection;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
 
}
QuestionById : any [];
public fetchQuestionById(lAuditId: Number, lSectionId:Number, lQuestionId: Number) {
  this.databaseObj.executeSql("SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER,IS_CRITICAL," +
  "QUESTION_MARKS,(SELECT COUNT(*) FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + ") AS CNT FROM QUESTION_TB t " +
  "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId, [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.QuestionById.push(res.rows.item(i));
              
            }
            return this.QuestionById;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

}

QuestionBased: any [];
public fetchQuestionBased(lAuditId:Number, lSectionId:Number, lQuestionId:Number) {
  this.databaseObj.executeSql("SELECT *  FROM QUESTION_STANDARD_TB" +
  "WHERE AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.QuestionBased.push(res.rows.item(i));
              
            }
            return this.QuestionBased;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

    
}
QuestionBasedValues: any [];
public fetchQuestionBasedValues(lAuditId: Number, lSectionId:Number, lQuestionId:Number, lStandardId:Number)  {

  this.databaseObj.executeSql("SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,VALUE_ID,VALUE_NAME FROM QUESTION_STANDARD_PREDEFINED_TB " +
  "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId, [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.QuestionBasedValues.push(res.rows.item(i));
              
            }
            return this.QuestionBasedValues;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

 
}
QuestionChoice : any [];
public  fetchQuestionChoice(lAuditId:Number, lSectionId:Number, lQuestionId: Number)  {
  this.databaseObj.executeSql("SELECT * FROM QUESTION_CHOICE_TB " +
  "WHERE AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.QuestionChoice.push(res.rows.item(i));
              
            }
            return this.QuestionChoice;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  
 
}

TopAttemptedSection: any [];
public fetchTopAttemptedSection(lAttemptedId: Number, lAuditId: Number)  {
  this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
  "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
  "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
  "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
  "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
  "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
  "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
  "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
  "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
  "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
  "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=0 ORDER BY A.SECTION_ORDER", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.QuestionChoice.push(res.rows.item(i));
              
            }
            return this.QuestionChoice;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

 
  
}

SLAttemptedSection: any[];
SLAttemptedSection_check : any [];
 public fetchSLAttemptedSection(lAttemptedId: Number, lSectionId: Number, lAuditId: Number)  {
  this.databaseObj.executeSql("SELECT * FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId + " AND PARENT_SECTION_ID=" + lSectionId, [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.SLAttemptedSection_check.push(res.rows.item(i));
              
            }
            return this.SLAttemptedSection_check;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });



 



   if (this.SLAttemptedSection_check != null) {
       if (this.SLAttemptedSection_check.length > 0) {
        this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
        "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
        "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
        "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
        "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
        "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
        "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.SLAttemptedSection.push(res.rows.item(i));
              
            }
            return this.SLAttemptedSection;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

         
          


       } else {

        this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
        "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
        "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
        "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
        "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
        "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
        "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", [])
        .then((res) => {
          this.row_store = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.SLAttemptedSection.push(res.rows.item(i));
              
            }
            return this.SLAttemptedSection;
          }
          //this.router.navigate(['dash-board']);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });

          
          
       }
   } else {

    this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
    "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
    "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
    "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
    "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
    "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
    "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
    "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
    "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
    "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
    "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", [])
    .then((res) => {
      this.row_store = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.SLAttemptedSection.push(res.rows.item(i));
          
        }
        return this.SLAttemptedSection;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

      
       
   }
 }
 GenericImageNotPushedAttemptedQuestionBySQL: any [];
public fetchGenericImageNotPushedAttemptedQuestionBySQL(lAttemptedId: Number, lAuditId: Number) {
  this.databaseObj.executeSql("SELECT AUDIT_ID,IMAGE_NAME FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND IMAGE_PUSHED='No' AND IMAGE_NAME<>'' " +
  "AND IMAGE_NAME<>'null'", [])
    .then((res) => {
      this.row_store = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.GenericImageNotPushedAttemptedQuestionBySQL.push(res.rows.item(i));
          
        }
        return this.GenericImageNotPushedAttemptedQuestionBySQL;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

 
}
DeleteGenericImages_array: any [];
DeleteGenericImages(sUniqueID: String, sAttemptedId: String) {
  this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + sAttemptedId,[]);
  
}

SaveGenericImage(sAttemptedId: String, sUniqueID: String, sAuditId: String, sStoreId: String, sImageNm: String, i: Number) {
 

  this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_IMAGES_TB(ATTEMPTED_ID,AUDIT_ID,STR_CODE,UNIQUE_ID,IMAGE_NAME,IMAGE_PUSHED) VALUES(" + sAttemptedId + "," + sAuditId + "," +
  "'" + sStoreId + "','" + sUniqueID + "','" + sImageNm + "','No')",[]).then(() => {
   
   //console.log("data inserted");
 
})
   .catch(e => {
   alert("error " + JSON.stringify(e));
});

}

UpdateAuditFindings(sAttemptedId:String, sUniqueID:String, sAuditId:String, sAuditFindings: String) {
  this.databaseObj.executeSql("UPDATE AUDIT_ATTEMPTED_TB SET AUDIT_FINDINGS='" + sAuditFindings.replace("'", "''") + "' WHERE ATTEMPTED_ID=" + sAttemptedId + " " +
  "AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'",[]).then(() => {
   
   //console.log("data inserted");
 
})
   .catch(e => {
   alert("error " + JSON.stringify(e));
});

  
}
AuditFindings : any [];
public GetAuditFindings(sAttemptedId: String, sUniqueID:String, sAuditId:String) {


  this.databaseObj.executeSql("SELECT AUDIT_FINDINGS FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + sAttemptedId + " AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'", [])
    .then((res) => {
      this.row_store = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.AuditFindings.push(res.rows.item(i));
          
        }
        return this.AuditFindings;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });


}

createQStandard(sAuditId:String, sSectionId:String, sQuestionId:String, sStandardId:String, sStandardTyp:String, sMinRng:String, sMaxRng:String, sFix:String, sUOM:String, sFieldLbl:String, sPreDefined:String) {


  this.databaseObj.executeSql("INSERT INTO QUESTION_STANDARD_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,STANDARD_TYPE,MIN_RANGE,MAX_RANGE,FIX,UOM,FIELD_LABEL,IS_PREDEFINED) " +
  "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sStandardId + ",'" + sStandardTyp + "','" + sMinRng + "'," +
  "'" + sMaxRng + "','" + sFix + "','" + sUOM + "','" + sFieldLbl + "','" + sPreDefined + "')",[]).then(() => {
   
  return true;
 
})
   .catch(e => {
    console.log("error " + JSON.stringify(e));
});

}

createQStandardPreDefined(sAuditId:String, sSectionId:String, sQuestionId:String, sStandardId:String, sValueId:String, sValueNm:String) {
  this.databaseObj.executeSql("INSERT INTO QUESTION_STANDARD_PREDEFINED_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,VALUE_ID,VALUE_NAME) " +
  "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sStandardId + "," + sValueId + ",'" + sValueNm + "')",[]).then(() => {
   
   //console.log("data inserted");
 
})
   .catch(e => {
   alert("error " + JSON.stringify(e));
});

  
}
AttemptedQuestionStandardBySQL: any[];
public fetchAttemptedQuestionStandardBySQL(lAttemptedId:Number, lAuditId:Number, lQuestionId:Number)  {
this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,FIELD_VALUE,COMMENTS,CHOICE_VALUE,POINTS,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD " +
"WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, [])
  .then((res) => {
    this.row_store = [];
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        this.AttemptedQuestionStandardBySQL.push(res.rows.item(i));
        
      }
      return this.AttemptedQuestionStandardBySQL;
    }
    //this.router.navigate(['dash-board']);
  })
  .catch(e => {
    alert("error " + JSON.stringify(e))
  });


  
}

AttemptedQuestionStandardValueBySQL: any [];

public fetchAttemptedQuestionStandardValueBySQL(lAttemptedId: Number, lAuditId: Number, lQuestionId: Number, lStandardId: Number)  {

  this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,STANDARD_ID,VALUE_ID,VALUE_NAME,VALUE_OBSERVED,POINTS,COMMENTS," +
  "CHOICE_VALUE,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
  "AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId, [])
    .then((res) => {
      this.row_store = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.AttemptedQuestionStandardValueBySQL.push(res.rows.item(i));
          
        }
        return this.AttemptedQuestionStandardValueBySQL;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });


  
}
CheckAudit: any [];
public ChkAudit(sAuditId:String)  {
  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_TB WHERE AUDIT_ID=" + sAuditId, [])
    .then((res) => {
      this.row_store = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.CheckAudit.push(res.rows.item(i));
          
        }
        return this.CheckAudit;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
 
}
CheckSection: any [];
public ChkSection(sAuditId:String, sSectionId:String)  {

  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM SECTION_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId, [])
    .then((res) => {
      this.CheckSection = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.CheckSection.push(res.rows.item(i));
          
        }
        return this.CheckSection;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
 
}
CheckQuestion : any [];
public  ChkQuestion(sAuditId:String, sSectionId:String, sQuestionId:String) {
  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId, [])
    .then((res) => {
      this.CheckQuestion = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.CheckQuestion.push(res.rows.item(i));
          
        }
        return this.CheckQuestion;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

 
}

CheckQuestionChoice: any [];
public ChkQuestionChoice(sAuditId: String, sSectionId:String, sQuestionId: String, sChoiceId: String)  {
  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_CHOICE_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId + " AND CHOICE_ID=" + sChoiceId, [])
  .then((res) => {
    this.CheckQuestionChoice = [];
    console.log(res);
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        this.CheckQuestionChoice.push(res.rows.item(i));
        
      }
      return this.CheckQuestionChoice;
    }
    //this.router.navigate(['dash-board']);
  })
  .catch(e => {
    alert("error " + JSON.stringify(e))
  });


 
}
CheckQuestionStandard: any [];
public ChkQuestionStandard(sAuditId:String, sSectionId:String, sQuestionId:String, sStandardId:String)  {

  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_STANDARD_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId + " AND STANDARD_ID=" + sStandardId, [])
    .then((res) => {
      this.CheckQuestionStandard = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.CheckQuestionStandard.push(res.rows.item(i));
          
        }
        return this.CheckQuestionStandard;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

 
}
CheckQuestionStandardPreDefined: any [];
public ChkQuestionStandardPreDefined(sAuditId:String, sSectionId:String, sQuestionId:String, sStandardId:String, sValueId:String)  {
  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_STANDARD_PREDEFINED_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId +
  " AND QUESTION_ID=" + sQuestionId + " AND STANDARD_ID=" + sStandardId + " AND VALUE_ID=" + sValueId, [])
    .then((res) => {
      this.CheckQuestionStandardPreDefined = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.CheckQuestionStandardPreDefined.push(res.rows.item(i));
          
        }
        return this.CheckQuestionStandardPreDefined;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

  
}
CheckAttemptAudit: any [];
public ChkAttemptAudit(sAuditId: String) {
 

  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB WHERE AUDIT_ID=" + sAuditId, [])
    .then((res) => {
      this.CheckAttemptAudit = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.CheckAttemptAudit.push(res.rows.item(i));
          
        }
        return this.CheckAttemptAudit;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

}

createSection1(sAuditId: String) {
  this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME,SECTION_DESC,SECTION_ORDER,SECTION_PT," +
  "T_QUESTION_COUNT,QUESTION_ANSWERED,S_QUESTION_COUNT,C_QUESTION_COUNT) SELECT B.ATTEMPTED_ID,B.AUDIT_ID,A.SECTION_ID,A.PARENT_SECTION_ID,A.SECTION_NAME," +
  "A.SECTION_DESC,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT,'' AS QUESTION_ANSWERED,A.S_QUESTION_COUNT,A.C_QUESTION_COUNT FROM SECTION_TB A " +
  "INNER JOIN AUDIT_ATTEMPTED_TB B ON A.AUDIT_ID=B.AUDIT_ID " +
  "LEFT JOIN AUDIT_ATTEMPTED_SECTION C ON B.ATTEMPTED_ID=C.ATTEMPTED_ID AND B.AUDIT_ID=C.AUDIT_ID AND A.SECTION_ID=C.SECTION_ID " +
  "WHERE A.AUDIT_ID=" + sAuditId + " AND C.SECTION_ID IS NULL",[]).then(() => {
   
   //console.log("data inserted");
 
})
   .catch(e => {
   alert("error " + JSON.stringify(e));
});

 
}
createQuestion1(sAuditId:String) {

  this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER,"+
  "IS_CRITICAL,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IMAGE_NAME,IS_INCLUDED,IMAGE_PUSHED) SELECT B.ATTEMPTED_ID,B.AUDIT_ID,A.SECTION_ID,"+
  "A.QUESTION_ID,A.QUESTION_TYPE_ID,A.QUESTION_NAME,A.QUESTION_TYPE,A.QUESTION_ORDER,A.IS_CRITICAL,A.QUESTION_MARKS,0 AS MARKS_SCORED,"+
  "'Open' AS QUESTION_STATUS,'' AS QUESTION_COMMENT,'' AS IMAGE_NAME,'Yes' AS IS_INCLUDED,'Yes' AS IMAGE_PUSHED FROM QUESTION_TB A "+
  "INNER JOIN AUDIT_ATTEMPTED_TB B ON A.AUDIT_ID=B.AUDIT_ID "+
  "LEFT JOIN AUDIT_ATTEMPTED_QUESTIONS C ON B.ATTEMPTED_ID=C.ATTEMPTED_ID AND B.AUDIT_ID=C.AUDIT_ID AND A.SECTION_ID=C.SECTION_ID AND A.QUESTION_ID=C.QUESTION_ID "+
  "WHERE A.AUDIT_ID="+sAuditId+" AND C.QUESTION_ID IS NULL",[]).then(() => {
   
   //console.log("data inserted");
 
})
   .catch(e => {
   alert("error " + JSON.stringify(e));
});

  
}
ValidateUser_arry: any [];
public ValidateUser(sUserId:String, sPassword:String) {
  this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM USER_TB WHERE EMP_ID='"+sUserId+"' AND PASSWORD='"+sPassword+"'", [])
    .then((res) => {
      this.ValidateUser_arry = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.ValidateUser_arry.push(res.rows.item(i));
          
        }
        return this.ValidateUser_arry;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

 
}
GetUsrDetails_arry: any [];
public  GetUsrDetails(sUserId: String, sPassword:String) {

  this.databaseObj.executeSql("SELECT * FROM USER_TB WHERE EMP_ID='"+sUserId+"' AND PASSWORD='"+sPassword+"'", [])
    .then((res) => {
      this.GetUsrDetails_arry = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.GetUsrDetails_arry.push(res.rows.item(i));
          
        }
        return this.GetUsrDetails_arry;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });




 
}



}//root class






