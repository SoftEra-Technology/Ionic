import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { Platform, ToastController } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
  })
  export class DataBaseHelper
  {
    public database123:SQLiteObject;
   
    readonly database_name1:string = "AUDIT_DB.db"; // DB name
  readonly table_name:string = "myfreakytable";
   // this.database = cc.akshay()
    
      constructor(
        private platform: Platform,
        public sqlite: SQLite,
        

      )
      {
        this.platform.ready().then(() => {
          this.createDB();
         }).catch(error => {
           console.log(error);
        });
        
      }
      createDB() {
       
        this.sqlite.create({
          name: this.database_name1,
          location: 'default'
        })
          .then((db: SQLiteObject) => {
            this.database123 = db;
            console.log("database Audit created");
            alert('freaky_datatable Database Created!');
          })
          .catch(e => {
            alert("error " + JSON.stringify(e))
          });
        }
        // public sqlite: SQLite, 
         
        //  public platform: Platform
        //   ) { 
        //     this.sqlite.create({
        //       name: 'AUDIT_DB.db',
        //       location: 'default'
        //     })
        //     .then((db: SQLiteObject) => {
        //         this.database = db; //set the object to your own var
        //         db.executeSql("CREATE TABLE USER_TB(_id integer primary key autoincrement,EMP_ID text not null, EMP_NAME text not null,EMAIL text not null,PASSWORD text not null,BU_ID integer not null,BU_NAME text not null);", []);
        //     });
             
          //}
         
    //   DATABASE_NAME: String="AUDIT_DB";
    //   database_name:string = "AUDIT_DB.db"
    //  DATABASE_VERSION: number=1;
      USER_TB: String ="CREATE TABLE USER_TB(_id integer primary key autoincrement,EMP_ID text not null," +
     "EMP_NAME text not null,EMAIL text not null,PASSWORD text not null,BU_ID integer not null,BU_NAME text not null);";
  
   STORE_TB: String ="CREATE TABLE STORE_TB(_id integer primary key autoincrement,STR_CODE text not null,STR_NAME text not null);";
  
   AUDIT_TB: String ="CREATE TABLE AUDIT_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "AUDIT_NAME text not null,AUDIT_TYPE_ID integer not null,AUDIT_TYPE text not null,AUDIT_STAGE text not null,AUDIT_PT integer not null," +
     "QUESTION_COUNT integer not null);";
  
   SECTION_TB: String ="CREATE TABLE SECTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,PARENT_SECTION_ID integer not null,SECTION_NAME text not null,SECTION_DESC text not null," +
     "SECTION_ORDER integer not null,SECTION_PT integer not null,T_QUESTION_COUNT integer not null,S_QUESTION_COUNT integer not null,"+
     "C_QUESTION_COUNT integer not null);";
  
   QUESTION_TB: String ="CREATE TABLE QUESTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_TYPE_ID integer not null,QUESTION_NAME text not null," +
     "QUESTION_TYPE text not null,QUESTION_ORDER integer not null,IS_CRITICAL text not null,QUESTION_MARKS integer not null);";
  
   QUESTION_CHOICE_TB: String ="CREATE TABLE QUESTION_CHOICE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,CHOICE_ID integer not null,CHOICE_TEXT text not null,POINTS integer not null," +
     "COMMENTS_REQUIRED text not null,IS_NEGATIVE text not null);";
  
   QUESTION_STANDARD_TB: String ="CREATE TABLE QUESTION_STANDARD_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null,STANDARD_TYPE text not null,MIN_RANGE text," +
     "MAX_RANGE text,FIX text,UOM text,FIELD_LABEL text,IS_PREDEFINED text);";
  
   QUESTION_STANDARD_PREDEFINED_TB: String ="CREATE TABLE QUESTION_STANDARD_PREDEFINED_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null,VALUE_ID integer not null,VALUE_NAME text not null);";
  
   QUESTION_OPTION_TB: String ="CREATE TABLE QUESTION_OPTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,OPTION_ID integer not null,OPTION_TEXT text not null,SCORABLE_FL text not null);";
  
   QUESTION_RANGE_TB: String ="CREATE TABLE QUESTION_RANGE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,RANGE_ID integer not null,MIN_RANGE text not null,MAX_RANGE text not null," +
     "POINTS integer not null,COMMENTS_REQUIRED text not null);";
  
   QUESTION_FIELDS_TB: String ="CREATE TABLE QUESTION_FIELDS_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,FIELD_NAME text not null,FIELD_TYPE text not null," +
     "ISKEY text not null,ISSCORABLE text not null);";
  
   FIELDS_VALUE_TB: String ="CREATE TABLE FIELDS_VALUE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,VALUE_ID not null,VALUE_NAME text not null,DEFAULT_VALUE text not null);";
  
   FIELDS_CHOICE_TB: String ="CREATE TABLE FIELDS_CHOICE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,CHOICE_ID not null,CHOICE_TEXT text not null," +
     "CHOICE_PT integer not null);";
  
   AUDIT_ATTEMPTED_TB: String ="CREATE TABLE AUDIT_ATTEMPTED_TB(ATTEMPTED_ID integer primary key autoincrement," +
     "AUDIT_ID integer not null,AUDIT_NAME text not null,STR_CODE text not null,STR_NAME text not null,USER_ID text not null," +
     "STR_MANAGER text not null,AUDIT_DT text not null,AUDIT_STATUS text not null,UNIQUE_ID text not null,AUDIT_FINDINGS text not null);";
  
   AUDIT_ATTEMPTED_SECTION: String ="CREATE TABLE AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID integer not null,AUDIT_ID integer not null," +
     "SECTION_ID integer not null,PARENT_SECTION_ID integer not null,SECTION_NAME text not null,SECTION_DESC text not null,"+
     "SECTION_ORDER integer not null,SECTION_PT integer not null,T_QUESTION_COUNT integer not null,QUESTION_ANSWERED integer not null,"+
     "S_QUESTION_COUNT integer not null,C_QUESTION_COUNT integer not null);";
  
   AUDIT_ATTEMPTED_QUESTIONS: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID integer not null,AUDIT_ID integer not null,"+
     "SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_TYPE_ID integer not null,QUESTION_NAME text not null," +
     "QUESTION_TYPE text not null,QUESTION_ORDER integer not null,IS_CRITICAL text not null,QUESTION_MARKS integer not null,MARKS_SCORED integer not null," +
     "QUESTION_STATUS text not null,QUESTION_COMMENT text not null,IMAGE_NAME text not null,IS_INCLUDED text not null,IMAGE_PUSHED text not null);";
  
   AUDIT_ATTEMPTED_RECIVING_QUESTIONS: String ="CREATE TABLE AUDIT_ATTEMPTED_RECIVING_QUESTIONS(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,UNLOAD_START_TIME text," +
     "UNLOAD_END_TIME text,VEHICLE_NO text,TEMPERATURE text);";
  
   AUDIT_ATTEMPTED_QUESTIONS_CHOICE: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTIONS_CHOICE(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,CHOICE_ID integer not null," +
     "CHOICE_TEXT text not null,POINTS integer not null,COMMENTS text,CHOICE_VALUE text not null);";
  
   AUDIT_ATTEMPTED_QUESTIONS_STANDATD: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTIONS_STANDATD(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null," +
     "FIELD_VALUE text,COMMENTS text,CHOICE_VALUE text,POINTS integer not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);";
  
   AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,STANDARD_ID integer not null," +
     "VALUE_ID integer not null,VALUE_NAME text not null,VALUE_OBSERVED text not null,POINTS integer not null,COMMENTS text,CHOICE_VALUE text not null," +
     "IMAGE_NAME text not null,IMAGE_PUSHED text not null);";
  
   AUDIT_ATTEMPTED_QUESTIONS_OPTION: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTIONS_OPTION(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,OPTION_ID integer not null," +
     "OPTION_TEXT text not null,OPTION_TEXT_VALUE text not null,POINTS integer not null,ISSCORABLE text);";
  
   AUDIT_ATTEMPTED_QUESTIONS_RANGE: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTIONS_RANGE(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,RANGE_ID integer not null," +
     "MIN_RANGE text not null,MAX_RANGE text not null,POINTS integer not null,COMMENTS text);";
  
   AUDIT_ATTEMPTED_QUESTION_FIELD: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTION_FIELD(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null," +
     "KEY_FIELD_NAME text not null,KEY_FIELD_TYPE text not null,ISKEY text not null,ISSCORABLE text not null,KEY_FIELD_VALUE_ID integer not null," +
     "KEY_FIELD_VALUE text not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);";
  
   AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null,KEY_FIELD_NAME text not null," +
     "KEY_FIELD_VALUE_ID integer not null,KEY_FIELD_VALUE text not null,OTHER_FIELD_ID integer not null,OTHER_FIELD_NAME text not null," +
     "OTHER_FIELD_TYPE text not null,OTHER_FIELD_ISKEY text not null,OTHER_FIELD_VALUE_ID integer not null,OTHER_FIELD_VALUE text not null);";
  
   AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE: String ="CREATE TABLE AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null,KEY_FIELD_NAME text not null," +
     "KEY_FIELD_VALUE_ID integer not null,KEY_FIELD_VALUE text not null,CHOICE_FIELD_ID integer not null,CHOIC_FIELD_NAME text not null," +
     "CHOICE_FIELD_TYPE text not null,CHOICE_FIELD_ISKEY text not null,CHOICE_ID integer not null,CHOICE_TEXT text not null,CHOICE_PT integer not null,CHECKED Text not null);";
  
   AUDIT_ERROR_LOG: String ="CREATE TABLE AUDIT_ERROR_LOG(ID integer primary key autoincrement,SCREEN_NAME text not null,"+
     "FUNCTION_NAME text not null,EXCEPTION text not null);";
  
   AUDIT_ATTEMPTED_IMAGES_TB: String ="CREATE TABLE AUDIT_ATTEMPTED_IMAGES_TB(ATTEMPTED_ID integer not null," +
     "AUDIT_ID integer not null,STR_CODE text not null,UNIQUE_ID text not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);";
  
  // public DataBaseHelper(){
  // (this.DATABASE_NAME,null,this.DATABASE_VERSION);
  // }

    
  
   public onCreate(): void{
     console.log("oncreated function");
      //this.database.executeSql(this.USER_TB.toString(),[]);
      this.database123.executeSql("CREATE TABLE STORE_TB(_id integer primary key autoincrement,STR_CODE text not null,STR_NAME text not null);",[]);
      // this.database.executeSql(this.AUDIT_TB.toString(),[]).then(() => {
      //   alert('Table Store Created!');
        
      // })
      // .catch(e => {
      //   alert("error " + JSON.stringify(e))
      // });
      // this.database.executeSql(this.SECTION_TB.toString(),[]).then(() => {
      //   alert('Table section Created!');
        
      // })
      // .catch(e => {
      //   alert("error " + JSON.stringify(e))
      // });;
      // this.database.executeSql(this.QUESTION_TB.toString(),[]);
      // this.database.executeSql(this.QUESTION_CHOICE_TB.toString(),[]);
      // this.database.executeSql(this.QUESTION_STANDARD_TB.toString(),[]);
      // this.database.executeSql(this.QUESTION_STANDARD_PREDEFINED_TB.toString(),[]);
      // this.database.executeSql(this.QUESTION_OPTION_TB.toString(),[]);
      // this.database.executeSql(this.QUESTION_RANGE_TB.toString(),[]);
      // this.database.executeSql(this.QUESTION_FIELDS_TB.toString(),[]);
      // this.database.executeSql(this.FIELDS_VALUE_TB.toString(),[]);
      // this.database.executeSql(this.FIELDS_CHOICE_TB.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_TB.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_SECTION.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTIONS.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTIONS_CHOICE.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTIONS_STANDATD.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTIONS_OPTION.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTIONS_RANGE.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_RECIVING_QUESTIONS.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTION_FIELD.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE.toString(),[]);
      // this.database.executeSql(this.AUDIT_ERROR_LOG.toString(),[]);
      // this.database.executeSql(this.AUDIT_ATTEMPTED_IMAGES_TB.toString(),[]);
  }
  
  
  // public  onUpgrade(database, oldVersion : number, newVersion: number): void {
  //   console.log(this.DATABASE_NAME,"Upgrading database from version "+oldVersion+" to "
  //             +newVersion+", which will destroy all old data");
  //     this.database.executeSql("DROP TABLE IF EXISTS todo");
  //     this.onCreate(database);
  // }
  }