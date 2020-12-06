import { Component, OnInit,AfterViewInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {UserData} from '../Model/UserMpdel'
import {UserLoginService} from '../Service/user-login.service'
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms'
import { UserResponce } from '../Model/UserResponce'
import { Network } from '@ionic-native/network/ngx';

//import {getWritableDatabase} from '../Service/DataBaseAdapter'
//import {DataBaseHelper} from '../Service/DataBaseHelper'
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { Platform, ToastController } from '@ionic/angular';
import { stringify } from 'querystring';
import {NetworkServiceService} from '../Service/network-service.service'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
form_user: FormGroup;
user_detail: UserData;
connection_st: boolean;
user_responce: UserResponce;
data_get : any [];
databaseObj: SQLiteObject;
readonly database_name:string = "AUDIT_DB.db"; // DB name
  readonly table_name:string = "myfreakytable";
  row_data: any [];
  Connection_Status: boolean;
  constructor(
    public userService: UserLoginService,
    public router: Router,
    private network: Network,
    private platform: Platform,
    public sqlite: SQLite,
    public networkServiceService: NetworkServiceService,
    private screenOrientation: ScreenOrientation 
        //public database:SQLiteObject,
   //public Data_Adapter: getWritableDatabase,
      //public Data_Helper: DataBaseHelper
     

  ) {

    this.user_detail = new UserData();
    //this.checkconnection();
    //this.user_responce =[];
    this.platform.ready().then(() => {
      //this.unlockScreen();
      this.setPortrait()

      this.createDB();
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
  ngAfterViewInit()
  {
    

  }

  createDB() {
    console.log("database created");
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
       
        this.databaseObj = db;
       
       // alert('audit Database Created!');
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
    }

   
    createTable() {
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS USER_TB (EMP_ID text PRIMARY KEY, EMP_NAME text not null,EMAIL text not null,PASSWORD text not null,BU_ID integer not null,BU_NAME text not null)', [])
        .then(() => {
          //alert('Table Created!');
          this.insertRow(this.user_responce.Usr.EmpId,  this.user_responce.Usr.EmpName,  this.user_responce.Usr.Email,  this.user_responce.Usr.Password,  this.user_responce.Usr.BuId,  this.user_responce.Usr.BuName);
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
    }
    
    insertRow(sEmpId: String, sEmpName: String,  sEmail:String, sPassword: String, sBuId: Number, sBuName: String) {
     
      
      // this.databaseObj.executeSql('INSERT INTO USER_TB (Name) VALUES ("' + this.name_model + '")', [])
      //   .then(() => {
      //     alert('Row Inserted!');
      //     console.log(this.data.username);
      //     this.getRows();
      //   })
      //   .catch(e => {
      //     alert("error " + JSON.stringify(e))
      //   });
      let sql: String="";
      sql = "DELETE FROM USER_TB";
      this.databaseObj.executeSql("DELETE FROM USER_TB",[]);

       sql = "INSERT INTO USER_TB(EMP_ID,EMP_NAME,EMAIL,PASSWORD,BU_ID,BU_NAME) VALUES('" + sEmpId + "','" + sEmpName + "'," +
               "'" + sEmail + "','" + sPassword + "'," + sBuId + ",'" + sBuName + "')";
       this.databaseObj.executeSql("INSERT INTO USER_TB(EMP_ID,EMP_NAME,EMAIL,PASSWORD,BU_ID,BU_NAME) VALUES('" + sEmpId + "','" + sEmpName + "'," +
       "'" + sEmail + "','" + sPassword + "'," + sBuId + ",'" + sBuName + "')",[]).then(() => {
        //alert('Record Created!');
        console.log("data inserted");
        this.getRows();
    })
        .catch(e => {
          console.log(JSON.stringify(e));
        alert("error " + JSON.stringify(e));
    });

       //alert("user inserted 00377 aks");
        
       //this.getRows(); 
    }
    
    getRows() {
      this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
        .then((res) => {
          this.row_data = [];
          console.log(res);
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.row_data.push(res.rows.item(i));
              //alert( this.row_data[i].toString())
              console.log(this.row_data[i].toString());
            }
          }
          this.router.navigate(['dash-board']);
        })
        .catch(e => {
          
          alert("error " + JSON.stringify(e))
        });
    }

    getRows_for_offine()
    {
      
      this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
      .then((res) => {
        this.row_data = [];
        console.log(res);
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
            
          }
          this.offine_login();
        }
        //this.router.navigate(['dash-board']);
      })
      .catch(e => {
        alert("Please check connnection Error: We must be online");
        return false;
      });

    }
    
    // deleteRow(item) {
    //   this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
    //     .then((res) => {
    //       alert("Row Deleted!");
    //       this.getRows();
    //     })
    //     .catch(e => {
    //       alert("error " + JSON.stringify(e))
    //     });
    // }
    
    //}

  

check_status: any;
checkconnection_serve()
{

  
  this.check_status= this.networkServiceService.getCurrentNetworkStatus();




}



  ngOnInit() {
    this.form_user = new FormGroup({
      EMAIL: new FormControl(''),
      USERPASSWORD: new FormControl('')
      
    });
   
  
  }

  sendPostRequest(user : any) {
    this.checkconnection_serve()
    this.user_detail = <UserData>this.form_user.value;
    
    console.log("we are in send request");
    console.log(this.check_status);
   
    if(this.check_status===0)
    {
            console.log("we are fetching record ")
           
            this.userService.validate_user(this.user_detail).subscribe(response => {
      
            //console.log(response);
            //this.user_detail = new UserData;
            try{
            this.user_responce =<UserResponce>response;
            console.log("we have fatched record from api");
          debugger;
            console.log(this.user_responce.Msg);
            console.log(this.user_responce.Usr.EmpName);
              if(this.user_responce.Usr.EmpName==null)
              {
                alert("Invalid credential - Either Email or Password is invalid");
                return false;
              }
              else{
                this.createTable();
              }
            


            } 
            catch(error)
            {
              alert("you are not connected");
              
        
            }
          });
   
    }
    else
    {
      if(this.check_status===1)
      {
  
        //alert("you are not connected");
        this.row_data=[];
        this.getRows_for_offine();
        
      }
    }
    
      
    } 

    offine_login()
    {
   
      let U_Name= this.user_detail.EMAIL;
      let U_Pass= this.user_detail.USERPASSWORD;
      console.log(U_Pass.toString());
      console.log(this.row_data);
      
      if(this.row_data.length>0)
      {

      
        for(let obj of this.row_data)
         {
         
          if(obj.EMP_ID==U_Name.toString() && (obj.PASSWORD==U_Pass))
          {
              console.log("we have fetched record from offle");
                this.router.navigate(['dash-board']);
          }
          else
          {
            alert("Invalid credential - Either Email or Password is invalid");
            return false;

          }

        }

    }
    else
    {

      alert("Please Connect this time online");
    }


    }

    Dashboard_txt()
    {

      this.router.navigate(['dash-board']);
    }
}

