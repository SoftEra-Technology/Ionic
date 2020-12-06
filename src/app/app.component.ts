import { Component } from '@angular/core';

import { Platform, ModalController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import {UserLoginService} from './Service/user-login.service'
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  readonly database_name:string = "AUDIT_DB.db"; 
  databaseObj: SQLiteObject;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private modalCtrl: ModalController,
    private statusBar: StatusBar,
    public network: Network,
    public LoginService: UserLoginService,
    public sqlite: SQLite
   

    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    //this.splashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.platform.backButton.subscribeWithPriority(1, () => { // to disable hardware back button on whole app
      });
 //this.moveToSplashPage();
      this.createDB();
      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        //console.log('network was disconnected :-(');
        //this.LoginService.Connected_status("NotConnected");
        // alert("disconnected");
        this.LoginService.Connected="false";
       
       });
       disconnectSubscription.unsubscribe();
       //alert("disconnected")
       this.LoginService.Connected="false";
      let connectSubscription = this.network.onConnect().subscribe(() => {
        //debugger;
        //console.log('network connected!');
       // alert("device has connection");
        //this.LoginService.Connected_status("Connected");
        this.LoginService.Connected="true";
        // We just got a connection but we need to wait briefly
        // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        console.log(this.network.type);
        setTimeout(() => {
          //console.log(this.network.type);
          if (this.network.type === 'wifi' ||
            this.network.type === '4g' 
          ) {
            //console.log('we got a connection, woohoo!');
          }
        }, 2500);
      });

       setTimeout(() => {
       this.splashScreen.hide();
        }, 3000);


    });

   
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
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
    }

    // async moveToSplashPage()
    // {
    //   const modal = await this.modalCtrl.create({
    //    component: SplashPage
    //  });
  
    //  return await modal.present();
    // }
}
