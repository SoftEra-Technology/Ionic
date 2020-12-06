import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import {UserLoginService} from '../Service/user-login.service'
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import {QuestionCommentPage} from '../question-comment/question-comment.page'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-audit-choice-question',
  templateUrl: './audit-choice-question.page.html',
  styleUrls: ['./audit-choice-question.page.scss'],
})
export class AuditChoiceQuestionPage implements OnInit {
  databaseObj: SQLiteObject;
  readonly database_name:string = "AUDIT_DB.db"; // DB name
  Query_data: any;

 Attempted_id: any;
  Section_id:any;
 Section_Name: any;
 Section_order: any;
 section_frist_order: any;
 Section_last_order: any;
 Total_Question: any;
 Question_id:any;
 Question_order: any;
 Question_name: any;
 Question_type: any;
 Question_Marks:any;
 Answer_text: any[];
 Answer_standared: any;
 Answer_standared_value: any;
 image_name:any;

AuditDate: any;
imageData;
  constructor(
    public userService: UserLoginService,
    public router: Router,
    private network: Network,
    private platform: Platform,
    public sqlite: SQLite,
    public activatedRoute : ActivatedRoute,
    private camera: Camera,
    public modalController: ModalController,
    private screenOrientation: ScreenOrientation
  ){ 

    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
       this.Query_data =<any>JSON.parse(res.value);
       console.log("list page");
       console.log(this.Query_data.AttemptedId);
       
       
  });
    this.platform.ready().then(() => {
      this.createDB();
      this. unlockScreen();
      this.setPortrait()
    }).catch(error => {
      console.log(error);
    });

  }
  setPortrait(){
    // set to portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  unlockScreen(){
    // allow user rotate
    this.screenOrientation.unlock();
  }

  ngOnInit() {
  }
  image:any=''
  openCam(){
//destinationType: this.camera.DestinationType.FILE_URI,
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
   
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //console.log(imageData)
     this.imageData = imageData;
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.upload(imageData)
    }, (err) => {
     // Handle error
     console.log("error "+JSON.stringify(err))
    });


  }
  choiceimageName: any;
  upload(imageData){
  debugger;
    let  url = 'your REST API url';
    const date = new Date().valueOf();
  
    // Replace extension according to your media type
    const imageName = date+ '.jpeg';
    this.choiceimageName = imageName;
    // call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(this.imageData.splice());
    const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' })
  
    let  postData = new FormData();
    postData.append('Files', imageFile);
  
    this.userService.Post_Question_Image(postData).subscribe(response => {
      debugger;
      //auditResponce_uploded: AuditResponce;
      //this.auditResponce = <AuditResponce>response;
      
        
    });



   //let data:Observable<any> = this.http.post(url,postData);
   // data.subscribe((result) => {
      //console.log(result);
    //});
  }
  dataURItoBlob(dataURI) {
    debugger;
    //const byteString = window.atob(dataURI);
    const byteString = window.atob(dataURI);
    

    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
     }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
   return blob;
  }
  Previous_Question()
  {
    this.image="";
      if(this.Question_order===1)
      {
        
          if(this.section_frist_order===this.Section_order)
          {
            let objecta = {
              AttemptedId: this.Attempted_id,
              AuditId: this.Query_data.AuditId,
              Storeid: this.Query_data.Store_id,
             
              }
           
        
              this.router.navigate(['/list-audit'],{
                queryParams: {
                   value : JSON.stringify(objecta)
                  },
                });
          }
          else
          {
               this.fetchPrevAttemptedSection(Number(this.Attempted_id), Number(this.Query_data.AuditId), Number(this.Section_id))
          }
      }
      else
      {
      
        this.fetchAttemptedAuditPrevQuestionBySQL(Number(this.Attempted_id), Number(this.Section_id), Number(this.Query_data.AuditId),Number(this.Question_id))
      }
    
  
}
  Review_page()
  {
    let objecta = {
      AttemptedId: this.Attempted_id,
      AuditId: this.Query_data.AuditId,
      Storeid: this.Query_data.Store_id,
      refresh: "yes",
     
      }
   

      this.router.navigate(['/list-audit'],{
        queryParams: {
           value : JSON.stringify(objecta)
          },
        });
  }
  Next_Question()
  {
    console.log("section order" + this.Section_order)
    console.log(this.section_frist_order)
    console.log(this.Section_last_order)
    this.selectedPOINTS =""
    this.image="";
  if(this.Total_Question===this.Question_order)
  {
    if(this.Section_last_order===this.Section_order)
    {
      let objecta = {
        AttemptedId: this.Attempted_id,
        AuditId: this.Query_data.AuditId,
        Storeid: this.Query_data.Store_id,
       
        }
     
  
        this.router.navigate(['/list-audit'],{
          queryParams: {
             value : JSON.stringify(objecta)
            },
          });
    }
    else
    {
      this.fetchNextAttemptedSection(Number(this.Attempted_id), Number(this.Query_data.AuditId),  Number(this.Section_id)) 
    }
  }
  else
  {
    this.fetchAttemptedAuditNextQuestionBySQL(Number(this.Attempted_id), Number(this.Section_id), Number(this.Query_data.AuditId),Number(this.Question_id))
  }

    

  }
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
      console.log("data from model popup")
      console.log(data);
     const popup_data1 = data['data']; // Here's your selected user!
     console.log(popup_data1);
     
      this.Question_comment=popup_data1;

  });

    return await modal.present();
    

  }
  popup_comment:any;
  View_Comment()
  {
    if(this.popup_comment=="" || this.popup_comment==undefined)
    {

    }
    else
    {
      this.Question_comment=this.popup_comment;
    }
    
    this.Add_Comment();


  }
  createDB() {
    console.log("database created");
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
       
        this.databaseObj = db;
        //this.fetchAttemptedAuditForStore(Number(this.Query_data.AuditId), String(this.Query_data.Storeid));
        this.fetchAttemptedSection(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId), Number(this.Query_data.SectionId) );
        this.fetchAttemptedQuestionBySQL(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId), Number(this.Query_data.SectionId), Number(this.Query_data.QuestionID))
        console.log("questionid: " +  this.Query_data.QuestionID);
       // this.fetchAttemptedQuestionChoiceBySQL(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId),  Number(this.Query_data.QuestionID))
     
        this.fetchQuestionChoice(Number(this.Query_data.AuditId), Number(this.Query_data.SectionId), Number(this.Query_data.QuestionID))
        //console.log('audit Database Created!');
        
      })
      .catch(e => {
        console.log("error " + JSON.stringify(e))
      });
    }
    selectedRadioGroup:any;
    selectedRadioGroupValue: any="0";
    radioGroupChange(event) {
      console.log("radioGroupChange",event.detail);
      this.selectedRadioGroup = <any>event.detail;
      this.selectedRadioGroupValue= this.selectedRadioGroup.value;
    
      console.log( this.selectedRadioGroupValue)
      this.value_for_update_choice(this.selectedRadioGroupValue)
      

    }

    Value_for_the_page()
    {


     
      if(this.AttemptedSection.length>0) 
      {
        
        this.section_frist_order= this.AttemptedSection[0].SECTION_ORDER;
       
        this.Section_last_order= this.AttemptedSection[this.AttemptedSection.length-1].SECTION_ORDER;
        this.Attempted_id= this.Query_data.AttemptedId;

        for(var i=0; i<=this.AttemptedSection.length; i++)
        {
            if(this.AttemptedSection[i].SECTION_ID===this.Query_data.SectionId)
            {
             
              this.Section_id=this.AttemptedSection[i].SECTION_ID;
              this.Section_Name=this.AttemptedSection[i].SECTION_NAME;
              this.Total_Question=this.AttemptedSection[i].T_QUESTION_COUNT;
              this.Section_order =this.AttemptedSection[i].SECTION_ORDER;
 
            }

        }
       
            this. value_for_the_page_question_choice()
      }
      
      
     

    }

    value_for_the_page_question_choice()
    {

      // if(this.AttemptedQuestionBySQL.length>0) 
      // {

      //   for(var j=0; j<=this.AttemptedQuestionBySQL.length; j++)
      //   {
      //     console.log("in the function value_for_the_page_question")
      //     console.log(this.AttemptedQuestionBySQL[j].QUESTION_ID);
      //     console.log(this.AttemptedQuestionBySQL[j].QUESTION_NAME);
      //       if(this.AttemptedQuestionBySQL[j].QUESTION_ID===this.Query_data.QuestionID)
      //       {
      //         this.Question_id=this.AttemptedQuestionBySQL[j].QUESTION_ID;
      //         this.Question_order=this.AttemptedQuestionBySQL[j].QUESTION_ORDER;
      //         this.Question_name=this.AttemptedQuestionBySQL[j].QUESTION_NAME;
      //         this.Question_type=this.AttemptedQuestionBySQL[j].QUESTION_TYPE;
      //         this.Question_Marks=this.AttemptedQuestionBySQL[j].QUESTION_MARKS;
              
              
      //       }

      //   }
     //   }
      
      if(this.Question_type=='Yes/No' || this.Question_type=='Choice') 
      { 
        this.fetchQuestionChoice(Number(this.Query_data.AuditId), Number(this.Section_id), Number(this.Question_id))
       
        if(this.Question_Status=="Done")
        (

          this.fetchQuestionChoice_Answered(Number(this.Query_data.AuditId), Number(this.Section_id), Number(this.Question_id))
        )
      }
      else
      {
        if(this.Question_type=='Standard')
        {
          
           this.fetchAttemptedQuestionStandardBySQL(Number(this.Attempted_id), Number(this.Query_data.AuditId), Number(this.Question_id))
        
        }
      }
    }

    AttemptedSection: any [];
    public fetchAttemptedSection(lAttemptedId:Number, lAuditId:Number, lSectionId: Number)  {
  
  
     
      
      this.databaseObj.executeSql("SELECT B.SECTION_NAME AS P_SECTION_NAME,A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.PARENT_SECTION_ID,A.SECTION_NAME,A.SECTION_DESC,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
      "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID " +
      "AND QUESTION_STATUS<>'Open')+(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID " +
      "AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
      "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes') AS SECTION_MARKS," +
      "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
      "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
      "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
      "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId +  " AND A.S_QUESTION_COUNT>0", [])
      .then((res) => {
        this.AttemptedSection = [];
        console.log(res);
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.AttemptedSection.push(res.rows.item(i));
            
          }
          console.log("section in choice")
          console.log(this.AttemptedSection);
        }
        //this.router.navigate(['dash-board']);
      })
      .catch(e => {
        console.log("error " + JSON.stringify(e))
      });
    
    }
    AttemptedQuestionBySQL : any [];
    public fetchAttemptedQuestionBySQL(lAttemptedId: Number, lAuditId:Number, lSectionId: Number, lQuestionId:Number )  {
     
    
      this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID,QUESTION_ORDER," +
      "CASE WHEN IS_INCLUDED='Yes' THEN QUESTION_MARKS ELSE 0 END AS QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED,IS_CRITICAL " +
      "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
      "AND SECTION_ID=" + lSectionId +  " ORDER BY QUESTION_ORDER", [])
            .then((res) => {
              this.AttemptedQuestionBySQL = [];
              console.log(res);
              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  this.AttemptedQuestionBySQL.push(res.rows.item(i));
                  if(this.AttemptedQuestionBySQL[i].QUESTION_ID===this.Query_data.QuestionID)
                  {
                    this.Question_id=this.AttemptedQuestionBySQL[i].QUESTION_ID;
                    this.Question_order=this.AttemptedQuestionBySQL[i].QUESTION_ORDER;
                    this.Question_name=this.AttemptedQuestionBySQL[i].QUESTION_NAME;
                    this.Question_type=this.AttemptedQuestionBySQL[i].QUESTION_TYPE;
                    this.Question_Marks=this.AttemptedQuestionBySQL[i].QUESTION_MARKS;
                    this.Question_comment=this.AttemptedQuestionBySQL[i].QUESTION_COMMENT;
                    this.Question_Status=this.AttemptedQuestionBySQL[i].QUESTION_STATUS;
                    this.Value_for_the_page();
                    this.value_for_the_page_question_choice();
                  }
                  
                }
                console.log("question in choice Value_for_the_page");
                
                 console.log(this.AttemptedQuestionBySQL);
                 
                //return this.AttemptedQuestionBySQL;
              }
              //this.router.navigate(['dash-board']);
            })
            .catch(e => {
              console.log("error " + JSON.stringify(e))
            });
    }

    AttemptedQuestionChoiceBySQL: any [];
  public fetchAttemptedQuestionChoiceBySQL(lAttemptedId: Number, lAuditId: Number, lQuestionId:Number)  {
  
    this.databaseObj.executeSql("SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " +
    "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " +
    "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId, [])
          .then((res) => {
            this.AttemptedQuestionChoiceBySQL = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.AttemptedQuestionChoiceBySQL.push(res.rows.item(i));
                
              }

              console.log("choice of the  question")
              console.log(this.AttemptedQuestionChoiceBySQL);
              //return this.AttemptedQuestionChoiceBySQL;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
          });
  
console.log("akshay");
  
    
  }
  AttemptedAuditPrevQuestionBySQL : any [];
  public fetchAttemptedAuditPrevQuestionBySQL(lAttemptedId: Number, lSectionId: Number, lAuditId: Number, lQuestionId:Number)  {
    this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," +
    "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " +
    "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM " +
    "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER<(SELECT QUESTION_ORDER " +
    "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))", [])
          .then((res) => {
            this.AttemptedAuditPrevQuestionBySQL = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.AttemptedAuditPrevQuestionBySQL.push(res.rows.item(i));
                
              }
             
                this.Question_id=this.AttemptedAuditPrevQuestionBySQL[0].QUESTION_ID;
                this.Question_order=this.AttemptedAuditPrevQuestionBySQL[0].QUESTION_ORDER;
                this.Question_name=this.AttemptedAuditPrevQuestionBySQL[0].QUESTION_NAME;
                this.Question_type=this.AttemptedQuestionBySQL[0].QUESTION_TYPE;
                this.Question_Marks=this.AttemptedAuditPrevQuestionBySQL[0].QUESTION_MARKS;
                this.Question_comment=this.AttemptedAuditPrevQuestionBySQL[0].QUESTION_COMMENT;
                this.Question_Status=this.AttemptedAuditPrevQuestionBySQL[0].QUESTION_STATUS;
                this.value_for_the_page_question_choice();
                
             
              return this.AttemptedAuditPrevQuestionBySQL;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
          });
  
    
  
    
  }
  PrevAttemptedSection: any [];
  public fetchPrevAttemptedSection(lAttemptedId: Number, lAuditId:Number, lSectionId:Number)  {
    this.databaseObj.executeSql("SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
    "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
    "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.T_QUESTION_COUNT,A.SECTION_NAME," +
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
            this.PrevAttemptedSection = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.PrevAttemptedSection.push(res.rows.item(i));
                
              }
              //this.Attempted_id=this.PrevAttemptedSection[0].ATTEMPTED_ID;;
              this.Section_id=this.PrevAttemptedSection[0].SECTION_ID;
              this.Section_Name=this.PrevAttemptedSection[0].SECTION_NAME;
              this.Total_Question=this.PrevAttemptedSection[0].T_QUESTION_COUNT;
              this.Section_order =this.NextAttemptedSection[0].SECTION_ORDER;
             
              this.fetchAttemptedQuestionBySQLForSectionChange(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId), Number(this.Section_id))
              //return this.PrevAttemptedSection;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
            console.log("error " + JSON.stringify(e))
          });
  
  
    }
    Question_comment: any="";
    AttemptedAuditNextQuestionBySQL: any [];
  public  fetchAttemptedAuditNextQuestionBySQL(lAttemptedId :Number, lSectionId:Number, lAuditId:Number, lQuestionId:Number)  {
    this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," +
    "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " +
    "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM " +
    "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER>(SELECT QUESTION_ORDER " +
    "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))", [])
          .then((res) => {
            this.AttemptedAuditNextQuestionBySQL = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.AttemptedAuditNextQuestionBySQL.push(res.rows.item(i));
                
              }
              this.Question_id=this.AttemptedAuditNextQuestionBySQL[0].QUESTION_ID;
              this.Question_order=this.AttemptedAuditNextQuestionBySQL[0].QUESTION_ORDER;
              this.Question_name=this.AttemptedAuditNextQuestionBySQL[0].QUESTION_NAME;
              this.Question_type=this.AttemptedAuditNextQuestionBySQL[0].QUESTION_TYPE;
              this.Question_Marks=this.AttemptedAuditNextQuestionBySQL[0].QUESTION_MARKS;
              this.Question_comment=this.AttemptedAuditNextQuestionBySQL[0].QUESTION_COMMENT;
              this.Question_Status=this.AttemptedAuditNextQuestionBySQL[0].QUESTION_STATUS;
              this.value_for_the_page_question_choice()
              //return this.AttemptedAuditNextQuestionBySQL;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
          });
  
  
    
  }
  NextAttemptedSection: any [];

  public fetchNextAttemptedSection(lAttemptedId:Number, lAuditId: Number, lSectionId: Number)  {
    this.databaseObj.executeSql( "SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
    "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
    "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.T_QUESTION_COUNT,A.SECTION_NAME," +
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
            this.NextAttemptedSection = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.NextAttemptedSection.push(res.rows.item(i));
                
              }

              this.Attempted_id=this.Query_data.AttemptedId;
              this.Section_id=this.NextAttemptedSection[0].SECTION_ID;
              this.Section_Name=this.NextAttemptedSection[0].SECTION_NAME;
              this.Total_Question=this.NextAttemptedSection[0].T_QUESTION_COUNT;
              this.Section_order =this.NextAttemptedSection[0].SECTION_ORDER;
             
              this.fetchAttemptedQuestionBySQLForSectionChange(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId), Number(this.Section_id));
              //return this.NextAttemptedSection;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
            console.log("error " + JSON.stringify(e))
          });
   
  }
  Question_Status : any;
AttemptedQuestionBySQLForSectionChange: any[];
  public fetchAttemptedQuestionBySQLForSectionChange(lAttemptedId: Number, lAuditId:Number, lSectionId: Number)  {
     
    
    this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID,QUESTION_ORDER," +
    "CASE WHEN IS_INCLUDED='Yes' THEN QUESTION_MARKS ELSE 0 END AS QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED,IS_CRITICAL " +
    "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId +" "+
    "AND SECTION_ID=" + lSectionId +  " ORDER BY QUESTION_ORDER", [])
          .then((res) => {
            this.AttemptedQuestionBySQLForSectionChange = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.AttemptedQuestionBySQLForSectionChange.push(res.rows.item(i));
               
                
              }
              this.Question_id=this.AttemptedQuestionBySQLForSectionChange[0].QUESTION_ID;
              this.Question_order=this.AttemptedQuestionBySQLForSectionChange[0].QUESTION_ORDER;
              this.Question_name=this.AttemptedQuestionBySQLForSectionChange[0].QUESTION_NAME;
              this.Question_type=this.AttemptedQuestionBySQLForSectionChange[0].QUESTION_TYPE;
              this.Question_Marks=this.AttemptedQuestionBySQLForSectionChange[0].QUESTION_MARKS;
              this.Question_comment=this.AttemptedQuestionBySQLForSectionChange[0].QUESTION_COMMENT;
              this.Question_Status=this.AttemptedQuestionBySQLForSectionChange[0].QUESTION_STATUS;
              console.log("question in choice Value_for_the_page");
           
               console.log(this.AttemptedQuestionBySQL);
               //this.Value_for_the_page();
               this.value_for_the_page_question_choice();
              //return this.AttemptedQuestionBySQL;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e));
            console.log("error " + JSON.stringify(e))
          });
  }
  QuestionById : any [];
  public fetchQuestionById(lAuditId: Number, lSectionId:Number, lQuestionId: Number) {
    this.databaseObj.executeSql("SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER,IS_CRITICAL," +
    "QUESTION_MARKS,(SELECT COUNT(*) FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + ") AS CNT FROM QUESTION_TB t " +
    "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId, [])
          .then((res) => {
            this.QuestionById = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.QuestionById.push(res.rows.item(i));
                
              }
              this.Value_for_the_page()
              return this.QuestionById;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
          });
  
  }
  
  QuestionBased: any [];
  public fetchQuestionBased(lAuditId:Number, lSectionId:Number, lQuestionId:Number) {
    this.databaseObj.executeSql("SELECT *  FROM QUESTION_STANDARD_TB" +
    "WHERE AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, [])
          .then((res) => {
            this.QuestionBased = [];
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
            console.log("error " + JSON.stringify(e))
          });
  
      
  }
  QuestionBasedValues: any [];
  public fetchQuestionBasedValues(lAuditId: Number, lSectionId:Number, lQuestionId:Number, lStandardId:Number)  {
  
    this.databaseObj.executeSql("SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,VALUE_ID,VALUE_NAME FROM QUESTION_STANDARD_PREDEFINED_TB " +
    "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId, [])
          .then((res) => {
            this.QuestionBasedValues = [];
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
            console.log("error " + JSON.stringify(e))
          });
  
   
  }
  QuestionChoice : any [];
  public  fetchQuestionChoice(lAuditId:Number, lSectionId:Number, lQuestionId: Number)  {
    this.databaseObj.executeSql("SELECT * FROM QUESTION_CHOICE_TB " +
    "WHERE AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, [])
          .then((res) => {
            
            this.QuestionChoice = [];

            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.QuestionChoice.push(res.rows.item(i));
                
              }
              console.log("choice value of this question")
              console.log(this.QuestionChoice);
              this.fetchQuestionChoice_Answered(Number(lAuditId), Number(lSectionId), Number(lQuestionId))
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
            //console.log("error " + JSON.stringify(e))
          });
    
   
  }
  QuestionChoice_answered : any [];
  Choice_selected_id: any;
  public  fetchQuestionChoice_Answered(lAuditId:Number, lSectionId:Number, lQuestionId: Number)  {
    this.databaseObj.executeSql("SELECT * FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE " +
    "WHERE AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, [])
          .then((res) => {
           
            this.QuestionChoice_answered = [];

            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.QuestionChoice_answered.push(res.rows.item(i));
                
              }
              this.selectedPOINTS ="";
              this.Choice_selected_id="";
              this.selectedPOINTS = this.QuestionChoice_answered[0].POINTS
              this.Choice_selected_id=this.QuestionChoice_answered[0].CHOICE_ID
              console.log("choice value of this question");
              console.log(this.QuestionChoice);

            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
            //console.log("error " + JSON.stringify(e))
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
            this.TopAttemptedSection = [];
            console.log(res);
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.TopAttemptedSection.push(res.rows.item(i));
                
              }
              return this.TopAttemptedSection;
            }
            //this.router.navigate(['dash-board']);
          })
          .catch(e => {
            console.log("error " + JSON.stringify(e))
          });
  
   
    
  }
  
  SLAttemptedSection: any[];
  SLAttemptedSection_check : any [];
   public fetchSLAttemptedSection(lAttemptedId: Number, lSectionId: Number, lAuditId: Number)  {
    this.databaseObj.executeSql("SELECT * FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId + " AND PARENT_SECTION_ID=" + lSectionId, [])
          .then((res) => {
            this.SLAttemptedSection_check = [];
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
            console.log("error " + JSON.stringify(e))
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
            this.SLAttemptedSection = [];
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
            console.log("error " + JSON.stringify(e))
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
            this.SLAttemptedSection = [];
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
            console.log("error " + JSON.stringify(e))
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
        this.SLAttemptedSection = [];
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
        console.log("error " + JSON.stringify(e))
      });
  
        
         
     }
   }
   GenericImageNotPushedAttemptedQuestionBySQL: any [];
  public fetchGenericImageNotPushedAttemptedQuestionBySQL(lAttemptedId: Number, lAuditId: Number) {
    this.databaseObj.executeSql("SELECT AUDIT_ID,IMAGE_NAME FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND IMAGE_PUSHED='No' AND IMAGE_NAME<>'' " +
    "AND IMAGE_NAME<>'null'", [])
      .then((res) => {
        this.GenericImageNotPushedAttemptedQuestionBySQL = [];
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
        console.log("error " + JSON.stringify(e))
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
     console.log("error " + JSON.stringify(e));
  });
  
  }
  
  UpdateAuditFindings(sAttemptedId:String, sUniqueID:String, sAuditId:String, sAuditFindings: String) {
    this.databaseObj.executeSql("UPDATE AUDIT_ATTEMPTED_TB SET AUDIT_FINDINGS='" + sAuditFindings.replace("'", "''") + "' WHERE ATTEMPTED_ID=" + sAttemptedId + " " +
    "AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'",[]).then(() => {
     
     //console.log("data inserted");
   
  })
     .catch(e => {
     console.log("error " + JSON.stringify(e));
  });
  
    
  }
  AuditFindings : any [];
  public GetAuditFindings(sAttemptedId: String, sUniqueID:String, sAuditId:String) {
  
  
    this.databaseObj.executeSql("SELECT AUDIT_FINDINGS FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + sAttemptedId + " AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'", [])
      .then((res) => {
        this.AuditFindings = [];
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
        console.log("error " + JSON.stringify(e))
      });
  
  
  }
  
  createQStandard(sAuditId:String, sSectionId:String, sQuestionId:String, sStandardId:String, sStandardTyp:String, sMinRng:String, sMaxRng:String, sFix:String, sUOM:String, sFieldLbl:String, sPreDefined:String) {
  
  
    this.databaseObj.executeSql("INSERT INTO QUESTION_STANDARD_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,STANDARD_TYPE,MIN_RANGE,MAX_RANGE,FIX,UOM,FIELD_LABEL,IS_PREDEFINED) " +
    "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sStandardId + ",'" + sStandardTyp + "','" + sMinRng + "'," +
    "'" + sMaxRng + "','" + sFix + "','" + sUOM + "','" + sFieldLbl + "','" + sPreDefined + "')",[]).then(() => {
     
     console.log("data inserted");
   
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
     console.log("error " + JSON.stringify(e));
  });
  
    
  }
  AttemptedQuestionStandardBySQL: any[];
  public fetchAttemptedQuestionStandardBySQL(lAttemptedId:Number, lAuditId:Number, lQuestionId:Number)  {
  this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,FIELD_VALUE,COMMENTS,CHOICE_VALUE,POINTS,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD " +
  "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, [])
    .then((res) => {
      this.AttemptedQuestionStandardBySQL = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.AttemptedQuestionStandardBySQL.push(res.rows.item(i));
          
        }
        console.log("standard for this qustion");
        console.log(this.AttemptedQuestionStandardBySQL);
        this.fetchAttemptedQuestionStandardValueBySQL(Number(this.Attempted_id), Number(this.Query_data.AuditId), Number(this.Question_id), Number(this.AttemptedQuestionStandardBySQL[0].STANDARD_ID))
        //return this.AttemptedQuestionStandardBySQL;
      }
      //this.router.navigate(['dash-board']);
    })
    .catch(e => {
      console.log("error " + JSON.stringify(e))
      console.log("error " + JSON.stringify(e))
    });
  
  
    
  }
  
  AttemptedQuestionStandardValueBySQL: any [];
  
  public fetchAttemptedQuestionStandardValueBySQL(lAttemptedId: Number, lAuditId: Number, lQuestionId: Number, lStandardId: Number)  {
  
    this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,STANDARD_ID,VALUE_ID,VALUE_NAME,VALUE_OBSERVED,POINTS,COMMENTS," +
    "CHOICE_VALUE,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
    "AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId, [])
      .then((res) => {
        this.AttemptedQuestionStandardValueBySQL = [];
        console.log(res);
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.AttemptedQuestionStandardValueBySQL.push(res.rows.item(i));
            
          }
          console.log("Attempted Question Standard Value");
          console.log("AttemptedQuestionStandardValueBySQL");
          //return this.AttemptedQuestionStandardValueBySQL;
        }
        //this.router.navigate(['dash-board']);
      })
      .catch(e => {
        console.log("error " + JSON.stringify(e))
        console.log("error " + JSON.stringify(e))
      });
  
  
    
  }
  selectedCHOICE_TEXT:any;
  selectedCHOICE_ID:any;
  selectedPOINTS:any;
 
  value_for_update_choice(choice_ids:any)
  {
    
  
            for(var i=0; i<=this.QuestionChoice.length-1; i++)
            {
                if(Number(this.QuestionChoice[i].CHOICE_ID)==Number(choice_ids))
                {
                  this.selectedCHOICE_TEXT=this.QuestionChoice[i].CHOICE_TEXT;
                  this.selectedCHOICE_ID=this.QuestionChoice[i].CHOICE_ID;
                  this.selectedPOINTS=this.QuestionChoice[i].POINTS;
                  console.log("choice seleted  id=="+ this.QuestionChoice[i].CHOICE_ID)
                }
                

            }

            if(choice_ids==="0")
            {
              this.selectedCHOICE_TEXT="NA";
              this.selectedCHOICE_ID="0";
              this.selectedPOINTS="0";
              console.log("choice seleted  id=="+ choice_ids)
            }
            this.fnGetSelectedValue()

  }

  fnGetSelectedValue()
    {
   

      this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE WHERE ATTEMPTED_ID=" + this.Attempted_id + " AND AUDIT_ID=" + this.Query_data.AuditId + " AND QUESTION_ID=" + this.Question_id, [])
      .then((res)=> {
        this.updateAuditAttemptedChoice()
        console.log("delete alltempted question choice");

      }).catch(e => {
        console.log("error " + JSON.stringify(e))
        this.updateAuditAttemptedChoice()
      });
      
      



    }
    updateAuditAttemptedChoice()
    {

      //       Attempted_id: any;
//   Section_id:any;
//  Section_Name: any;
//  Section_order: any;
//  section_frist_order: any;
//  Section_last_order: any;
//  Total_Question: any;
//  Question_id:any;
//  Question_order: any;
//  Question_name: any;
//  Question_type: any;
//  Question_Marks:any;
//  Answer_text: any[];
//  Answer_standared: any;
//  Answer_standared_value: any;
//  image_name:any;

debugger;
      this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_QUESTIONS_CHOICE(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME," +
      "CHOICE_ID,CHOICE_TEXT,POINTS,COMMENTS,CHOICE_VALUE) VALUES(" + this.Attempted_id + "," + this.Query_data.AuditId + "," + this.Section_id + "," + this.Question_id + "," +
      "'" + this.Question_name + "'," + this.selectedCHOICE_ID + ",'" + this.selectedCHOICE_TEXT + "'," + this.selectedPOINTS + ",'" + this.Question_comment + "'," +
      "'" + this.selectedCHOICE_TEXT + "')", [])
      .then((res)=> {
        console.log("updated alltempted question choice");
          
          this.updateAuditQuestion();
     

      }).catch(e => {
        console.log("error " + JSON.stringify(e))
        console.log("error " + JSON.stringify(e))
      });

    }

    updateAuditSection()
    {

      this.databaseObj.executeSql("UPDATE AUDIT_ATTEMPTED_SECTION SET QUESTION_ANSWERED=(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS " +
      "WHERE ATTEMPTED_ID=" + this.Attempted_id + " AND AUDIT_ID=" + this.Query_data.AuditId + " AND SECTION_ID=" + this.Section_id + " AND QUESTION_STATUS='Done') " +
      "WHERE ATTEMPTED_ID=" + this.Attempted_id + " AND AUDIT_ID=" + this.Query_data.AuditId + " AND SECTION_ID=" + this.Section_id, [])
      .then((res)=> {
        this.Update_Audit_Status();
        console.log("updated alltempted section");

      }).catch(e => {
       
        console.log("error " + JSON.stringify(e))
      });
      


     

    }
    sImagePushed: string="No";
    sIncluded:string ="Yes";
   sImageName : string ="akshay.jpg"
    updateAuditQuestion()
    {
      
      this.databaseObj.executeSql("UPDATE AUDIT_ATTEMPTED_QUESTIONS SET QUESTION_STATUS='Done',MARKS_SCORED=" + this.selectedPOINTS + ",QUESTION_COMMENT='" + this.Question_comment + "'," +
      "IMAGE_NAME='" + this.sImageName + "',IS_INCLUDED='" + this.sIncluded + "',IMAGE_PUSHED='" + this.sImagePushed + "' WHERE ATTEMPTED_ID=" + this.Attempted_id + " " +
      "AND AUDIT_ID=" + this.Query_data.AuditId + " AND QUESTION_ID=" + this.Question_id, [])
      .then((res)=> {
        this.updateAuditSection();
        console.log("updated all Atempted questions status ");
//this.Update_Audit_Status();
      }).catch(e => {
       
        console.log("error " + JSON.stringify(e))
      });
      

    }
        
    Compleated_audit: any [];
    Update_Audit_Status()
        {
          this.databaseObj.executeSql("SELECT SUM(S_QUESTION_COUNT) AS QUESTION_COUNT,SUM(QUESTION_ANSWERED) AS QUESTION_ANSWERED " +
          "FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + this.Attempted_id + " AND AUDIT_ID=" + this.Query_data.AuditId+" AND S_QUESTION_COUNT>0", [])
          .then((res)=> {
            this.Compleated_audit = [];
            
        console.log(res);
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.Compleated_audit.push(res.rows.item(i));
            
          }
        }
        debugger;
          let iQuestionCnt = this.Compleated_audit[0].QUESTION_COUNT;
          let iQuestionAns = this.Compleated_audit[0].QUESTION_ANSWERED;
          console.log("iQuestionCnt= "+ iQuestionCnt);
          console.log("iQuestionCnt= "+ iQuestionAns);
          if ( iQuestionAns===  iQuestionCnt) {
            this.Update_Audit();
        }
        

        
            console.log("check audit compleated or mot id ");
    
          }).catch(e => {
           
            console.log("error " + JSON.stringify(e))
          });
       
  
        }

        
        Update_Audit()
        {

          this.databaseObj.executeSql("UPDATE AUDIT_ATTEMPTED_TB SET AUDIT_STATUS='Close' WHERE ATTEMPTED_ID=" + this.Attempted_id + " AND AUDIT_ID=" + this.Query_data.AuditId, [])
          .then((res)=> {
    
            console.log("updated Complated Audit");
    
          }).catch(e => {
           
            console.log("error " + JSON.stringify(e))
          });

        }
    
}
