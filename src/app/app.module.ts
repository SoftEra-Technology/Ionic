import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {UserLoginService} from './Service/user-login.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Network } from '@ionic-native/network/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLiteObject } from '@ionic-native/sqlite';
//import { Platform, ToastController } from '@ionic/angular';
import {getWritableDatabase} from './Service/DataBaseAdapter'
import {DataBaseHelper} from './Service/DataBaseHelper'
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";
import {NetworkServiceService} from './Service/network-service.service'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot({hardwareBackButton: false}), AppRoutingModule, ReactiveFormsModule,FormsModule],
  providers: [
    StatusBar,
    UserLoginService,
    getWritableDatabase,
    DataBaseHelper,
    SplashScreen,
    NgxNavigationWithDataComponent,
    Network,
    Camera,
    ScreenOrientation,
    SQLite,
    NetworkServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
