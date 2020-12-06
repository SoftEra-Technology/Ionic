import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {AuditResponce} from '../Model/AuditResponse';
import {Store} from '../Model/Store'
import { Platform, ToastController } from '@ionic/angular';
import {StoreResponse} from '../Model/StoreResponse '
import {UserLoginService } from '../Service/user-login.service'
import { Data, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import {QuestionCommentPage} from '../question-comment/question-comment.page'
import {LoaderServiceService} from '../Service/loader-service.service'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {SavedAudit} from '../Model/SavedAudit';
import {SavedQuestion} from '../Model/SavedQuestion';
import {FilledChoice} from '../Model/FilledChoice';
import { Audit } from '../Model/Audit';
import {UnitManagerLoginPage} from '../unit-manager-login/unit-manager-login.page';
import {UnitManager} from '../Model/UnitManager'


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
@Component({
  selector: 'app-close-audit',
  templateUrl: './close-audit.page.html',
  styleUrls: ['./close-audit.page.scss'],
})
export class CloseAuditPage implements OnInit {

  databaseObj: SQLiteObject;
  readonly database_name:string = "AUDIT_DB.db"; // DB name
  auditResponce: AuditResponce;
  storeResponse: StoreResponse;
  store: Store;
  savedAudit: SavedAudit;
  savedQuestions: SavedQuestion [];
  savedQuestions_array = [];
  savedQuestion: SavedQuestion;
  filledChoices: FilledChoice [];
  filledChoice: FilledChoice;
 row_data : any [];
 row_store: any [];
 image_name:any;
ObjUM = new UnitManager();
AuditDate: any;
imageData;
 
  constructor(

    private platform: Platform,
    public sqlite: SQLite,
      //public database:SQLiteObject,
      public userService: UserLoginService,
      public router: Router,
      private camera: Camera,
      public modalController: ModalController,
      private screenOrientation: ScreenOrientation,
      private ionLoader: LoaderServiceService,
      
  ) { 
    this.store= new Store()
    this.platform.ready().then(() => {
      this.createDB();
      this.setLandscape()
    }).catch(error => {
      console.log(error);
    });


  }
  showLoader() {
    this.ionLoader.showLoader();
 
     setTimeout(() => {
       this.hideLoader();
     }, 328000);
  }
 
  hideLoader() {
    this.ionLoader.hideLoader();
    window.location.reload();
  }

  image:any=''
  openCam(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    const tempImage =  this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //console.log(imageData)
     this.imageData = imageData;
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     console.log("error "+JSON.stringify(err))
    });

  }
  upload(){
    let  url = 'your REST API url';
    const date = new Date().valueOf();
  
    // Replace extension according to your media type
    const imageName = date+ '.jpeg';
    // call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(this.imageData);
    const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' })
  
    let  postData = new FormData();
    postData.append('file', imageFile);
  
   // let data:Observable<any> = this.http.post(url,postData);
    //data.subscribe((result) => {
      //console.log(result);
    //});
  }
  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
     }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
   return blob;
  }
  Question_comment: any="";
  async Add_Comment()
  {
    //this.Question_comment="akshay  comment"
    const modal = await this.modalController.create({
      component: QuestionCommentPage,
      componentProps: {
        'comment':  this.Question_comment,
        
      }
    });
    modal.onDidDismiss()
    .then((data) => {
      console.log("data from model popup in close Audit")
      console.log(data);
     const popup_data1 = data['data']; // Here's your selected user!
     console.log(popup_data1);
     
      this.Question_comment=popup_data1;

  });

    return await modal.present();
    

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
            this.fetchAttemptedOpenAuditByUser(this.row_data[0].EMP_ID.toString());
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
    "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Close'", [])
    .then((res) => {
      this.AttemptedOpenAuditByUser = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.AttemptedOpenAuditByUser.push(res.rows.item(i));
          
          
        
        }
        //console.log("anoop");
        //console.log(this.AttemptedOpenAuditByUser);
        return this.AttemptedOpenAuditByUser;
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

  ngOnInit() {
  }
  AttemptedClosedAuditByUser = [];
  AttemptedClosedAudit = [];
  AttemptedClosedAuditSection = [];
  AttemptedClosedAuditSectionQuestion = [];
  AttemptedClosedAuditSectionQuestionAnswer = [];
  unit_managerid: any="";
  unit_managerPass: any="";
  unit_managerComment: any="";
 // this.comment_um, this.UMId, this.PASS
  async PushAudit()
  {
    let lAttemptedId: any =this.objecta.AttemptedId;
   // this.deletAttemptedAuditById(Number(lAttemptedId));
    //this.Question_comment="akshay  comment"
    if(this.objecta==undefined)
    {
      alert("Please Select One Audit");
      return false;
    }
    else{
      const modal = await this.modalController.create({
        component: UnitManagerLoginPage,
        componentProps: {
          'comment':  this.unit_managerComment,
            'UMId': this.unit_managerid,
            'PASS': this.unit_managerPass,
        }
      });
      modal.onDidDismiss()
      .then((data) => {
        debugger;
        console.log("data from model popup in close Audit for Unit Manager")
        console.log(data);
       const popup_data1 = data['data']; // Here's your selected user!
       console.log(popup_data1);
       this.ObjUM = <UnitManager>popup_data1;
       this.unit_managerid = this.ObjUM.UMId;
       this.unit_managerPass= this.ObjUM.UMPASS;
    this.unit_managerComment= this.ObjUM.UComment;
       //var aa= this.ObjUM.data.UMId;
       console.log(this.unit_managerid);
       if(this.unit_managerid=="" || this.unit_managerPass=="")
       {
          alert("Please Enter Unit Manager Id And PassWord");
       }
       else{
        this.PushAudit_server(this.unit_managerid, this.unit_managerPass, this.unit_managerComment )
       }
       //alert(this.unit_managerid);
        //this.Question_comment=popup_data1;
  
    });
    return await modal.present();
    }
    
    

    
    

  }

 async PushAudit_server(unit_managerid:String, unit_managerPass:String, unit_managerComment:String)
  {
    
    this.showLoader();
    this.savedAudit = new SavedAudit();
    
   
     let lAttemptedId: any =this.objecta.AttemptedId;
     let lAuditId: any = this.objecta.AuditId;
     let Storeid: any = this.objecta.Storeid;
    let sql:any = "SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " +
                "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId;

    this.databaseObj.executeSql("SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " +
    "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId +"", [])
    .then((res) => {
      this.AttemptedClosedAudit = [];
      //console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.AttemptedClosedAudit.push(res.rows.item(i));
          
        }
        
        console.log("Audit");
        //console.log(this.AttemptedClosedAudit);
        
        this.savedAudit._auditId=Number(this.AttemptedClosedAudit[0].AUDIT_ID);
        //this.savedAudit._auditId=Number(this.AttemptedClosedAudit[0].AUDIT_NAME);
        this.savedAudit._strCode=String(this.AttemptedClosedAudit[0].STR_CODE);
        //this.savedAudit._auditId=Number(this.AttemptedClosedAudit[0].STR_NAME);
        this.savedAudit._auditor=String(this.AttemptedClosedAudit[0].USER_ID);
        this.savedAudit._stroreManager=String(this.AttemptedClosedAudit[0].STR_MANAGER);
        let Auditdd = String(this.AttemptedClosedAudit[0].AUDIT_DT).slice(0,10).split("-");
        let year: String = Auditdd[0];
        let mm: String = Auditdd[1];
        let dd: String = Auditdd[2];
        let Audit_date: String =  dd +"/"+mm+"/"+year;
        this.savedAudit._auditDt=Audit_date;
        //this.savedAudit._auditDt=String(this.AttemptedClosedAudit[0].AUDIT_DT).slice(0,10).replace('-','/').replace('-','/');
        this.savedAudit._uniqueId=String(this.AttemptedClosedAudit[0].UNIQUE_ID);
        this.savedAudit._isValid="yes";
        this.savedAudit._status="Closed";
        debugger;
        this.savedAudit._umId= unit_managerid;
        //"356302114";
        this.savedAudit._umPwd=unit_managerPass;
        
        //"0W9H7Ya1";
        this.savedAudit._auditeeComment="Auditee Comment";
        this.savedAudit._auditorComment="Auditror Comment";
        this.savedAudit._auditFindings="Audit Findings";
        this.GetClosedSection ()
        console.log(this.savedAudit);
        //return this.AttemptedClosedAuditByUser;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      console.log("error " + JSON.stringify(e))
    });

                  
                    







  }
  GetClosedSection ()
  {
    let lAttemptedId: any =this.objecta.AttemptedId;
    let lAuditId: any = this.objecta.AuditId;
    let Storeid: any = this.objecta.Storeid;

    var sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER" +
                    "FROM AUDIT_ATTEMPTED_SECTION A " +
                    "WHERE " +
                    "A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId;

                    this.databaseObj.executeSql("SELECT SECTION_ID, SECTION_NAME, SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId +"", [])
                    .then(async (res) => {
                      this.AttemptedClosedAuditSection = [];
                      //console.log(res);
                      if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                          this.AttemptedClosedAuditSection.push(res.rows.item(i));
                          
                        }
                        console.log("Audit section");
                        this.savedQuestions_array= [];
                        //console.log(this.AttemptedClosedAuditSection);
                        for (var i = 0; i < this.AttemptedClosedAuditSection.length; i++) {
                          
                        let asns= await this.GetClosedSeectionQuestion(Number(lAttemptedId), Number(lAuditId), Number(this.AttemptedClosedAuditSection[i].SECTION_ID), String(this.AttemptedClosedAuditSection[i].SECTION_NAME), Number(this.AttemptedClosedAuditSection[i].SECTION_ORDER))                        
                        
                         
                        }
                      
                        this.savedAudit._lstQuestion=this.savedQuestions_array;
                        for (var i = 0; i < this.savedAudit._lstQuestion.length; i++) {
                          
                            let an = await  this.GetClosedSeectionQuestionAnswer(Number(lAttemptedId), Number(lAuditId), Number(this.savedAudit._lstQuestion[i]._questionId))
                            this.savedAudit._lstQuestion[i]._lstChoice=this.filledChoices1;
                            
                          }
                        console.log("object of audit aaaaaaaaaaa");
                        console.log(JSON.stringify(this.savedAudit));
                        console.log(this.savedAudit);

                        this.userService.Post_Close_Audit(this.savedAudit).subscribe(response => {
                          debugger;
                          //auditResponce_uploded: AuditResponce;
                          //this.auditResponce = <AuditResponce>response;
                          if(response['StatusFl']==true)
                          {
                            alert("Audit Uploded");
                            
                            this.deletAttemptedAuditById(Number(lAttemptedId));
                            this.ionLoader.hideLoader();
                            window.location.reload();
                          }
                          else{
                            alert(response['Msg']);
                            this.ionLoader.hideLoader();
                          }
                            
                        });
                        //this.hideLoader();
                        //return this.AttemptedClosedAuditSection;
                      }
                      //this.router.navigate(['dash-board']);
                    })
                    .catch(e => {
                      console.log("error " + JSON.stringify(e))
                    });

  }

async GetClosedSeectionQuestion(lAttemptedId:Number, lAuditId:Number, lId:Number, SECTION_NAME:String, SECTION_ORDER:Number)
  {

   let sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
    "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
    "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
    "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId;

// "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID, B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId +"", [])
         

this.databaseObj.executeSql("SELECT QUESTION_ID,QUESTION_NAME,QUESTION_ORDER,QUESTION_TYPE_ID," +
                "QUESTION_TYPE,QUESTION_COMMENT,IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS  " +
                "WHERE  " +
                "ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lId +"", [])
                 
                .then(async (res) => {
                this.AttemptedClosedAuditSectionQuestion = [];
                //console.log(res);
                if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                this.AttemptedClosedAuditSectionQuestion.push(res.rows.item(i));

                }
                console.log("Question");
                //console.log(this.AttemptedClosedAuditSectionQuestion);
                for (var i = 0; i < this.AttemptedClosedAuditSectionQuestion.length; i++) {
                  var question = new SavedQuestion();
                  question._sectionId= lId;
                  question._sectionNm=SECTION_NAME;
                  question._sectionOrder = SECTION_ORDER;
                  question._questionId=Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_ID);
                  question._questionNm=this.AttemptedClosedAuditSectionQuestion[i].QUESTION_NAME;
                  question._questionOrder=Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_ORDER);
                  question._questionTypeId=Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_TYPE_ID);
                  question._questionType= this.AttemptedClosedAuditSectionQuestion[i].QUESTION_TYPE
                  question._imgString=this.AttemptedClosedAuditSectionQuestion[i].QUESTION_COMMENT
                  question._attachedImage= this.AttemptedClosedAuditSectionQuestion[i].IMAGE_NAME
                  question._questionAns="aks";
                 // console.log("Question obj");

                  //console.log(question);
                  //  let an = await  this.GetClosedSeectionQuestionAnswer(Number(lAttemptedId), Number(lAuditId), Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_ID))
                  //  console.log("Question Answer");
                  //  console.log(this.AttemptedClosedAuditSectionQuestionAnswer);
                  // var filledChoices1 =[];
                  //  for (var i = 0; i < this.AttemptedClosedAuditSectionQuestionAnswer.length; i++) {
                  //      var fildcho = new FilledChoice ();
                  //      fildcho.Choice = this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_TEXT;
                  //      fildcho.ChoiceId = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_ID);
                  //      fildcho.Marks = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].POINTS);
                  //      //A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME
                  //     filledChoices1.push(fildcho)
                  //    }
                  //   // console.log("Question Answer obj");
                    // console.log(this.filledChoices);
                     //question.ChoiceValues= filledChoices1;
                     //debugger;
                    this.savedQuestions_array.push(question) 
                    console.log("Question Answer obj");
                    console.log(this.savedQuestions_array);

                }

                

                
                //return this.AttemptedClosedAuditSectionQuestion;
                }
                
            
                //this.router.navigate(['dash-board']);
                })
                .catch(e => {
                  console.log("error " + JSON.stringify(e))
                });
                //return new Promise(resolve => {
       //           setTimeout(() => {
                    //resolve(x);
         //         }, 100);
               // });
    //            console.log("this might take some time....");
     await delay(5000);
     console.log("done!")
     let num =  10;
     return num;

  }
  filledChoices1 =[];
  async GetClosedSeectionQuestionAnswer(lAttemptedId:Number, lAuditId:Number,  lQuestionId:Number) 
  {
     
    let sql = "SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " + "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " +  "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId;

    this.databaseObj.executeSql("SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " + "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " +  "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId+"", [])
    .then((res) => {
    this.AttemptedClosedAuditSectionQuestionAnswer = [];
    console.log(res);
    if (res.rows.length > 0) {
    for (var i = 0; i < res.rows.length; i++) {
    this.AttemptedClosedAuditSectionQuestionAnswer.push(res.rows.item(i));

    }
    console.log("Question Answer");
    console.log(this.AttemptedClosedAuditSectionQuestionAnswer);
     this.filledChoices1 =[];
                    for (var i = 0; i < this.AttemptedClosedAuditSectionQuestionAnswer.length; i++) {
                        var fildcho = new FilledChoice ();
                        fildcho.Choice = this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_TEXT;
                        fildcho.ChoiceId = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_ID);
                        fildcho.Marks = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].POINTS);
                        fildcho.Comments="Akshay";
                        fildcho.Value=this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_VALUE;
                        //A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME
                       this.filledChoices1.push(fildcho)
                      }
    

   // return this.AttemptedClosedAuditSectionQuestionAnswer;
    }
    //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      console.log("error " + JSON.stringify(e))
    });
    console.log("this might take some time....");
    await delay(5000);
    console.log("done!")
    let num =  10;
    return num;
  }




   async deletAttemptedAuditById(attemtedId: Number) {

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
   


    //kjkljkl
//     this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});

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

await delay(5000);
console.log("done!")
let num =  10;
return num;
  }

}
