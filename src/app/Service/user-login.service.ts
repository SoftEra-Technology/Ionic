import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserData} from '../Model/UserMpdel'
import {UserResponce} from '../Model/UserResponce';
import { Observable} from 'rxjs';
import {AuditResponce} from '../Model/AuditResponse'

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import {StoreResponse} from '../Model/StoreResponse '
import {SavedAudit} from '../Model/SavedAudit'


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  Connected: string="false";
  constructor(public httpClient: HttpClient
   
      
    
    ) { 

     
    }

    Connected_status(st:string)
    {
        this.Connected=st;
        
}

CheckConnection():boolean
{
  console.log("inservice");
  console.log(this.Connected);
    if(this.Connected="Connected")
    {
      return true
    }
    
    if(this.Connected=undefined)
    {
      return false
    }
    if(this.Connected="NotConnected")
    {
      return false
    }

}

  validate_user(item): Observable<UserResponce>
  {
console.log(item.EMAIL);
    console.log("i am in function");
    return this.httpClient.post<UserResponce>('http://audit.pro-cs.in/Tablez/api/Master/AuditHandler.ashx?caller=AuthenticateAuditor', { 
       Email: item.EMAIL,
      Password: item.USERPASSWORD
  })
  }
EMPID: String;
  Get_Audit_By_Auditor(item)
  {


    //console.log("get Audit by Auditor" + item);
   // console.log('http://feedback.homeip.net:805/Audit/api/Master/AuditHandler.ashx?caller=GetAudits&EmpId='+item);
    return this.httpClient.get('http://audit.pro-cs.in/Tablez/api/Master/AuditHandler.ashx?caller=GetAudits&EmpId='+item)
  }
  Get_Audit_By_Id(item): Observable<AuditResponce>
  {
      return this.httpClient.get<AuditResponce>('http://audit.pro-cs.in/Tablez/api/Master/AuditHandler.ashx?caller=GetAuditById&AuditId='+item)


  }

  Get_All_Store(item): Observable<StoreResponse >
  {
    console.log(item.StrName);
    console.log(item.StrCode);
      debugger;
    return this.httpClient.post<StoreResponse >('http://audit.pro-cs.in/Tablez/api/Master/AuditHandler.ashx?caller=GetStores', { 
      EmpId: item.StrName,
      BuId: item.StrCode
 });

 



  }

  Post_Close_Audit(item): Observable<SavedAudit >
  {
    
      debugger;
      
      
    return this.httpClient.post<SavedAudit >('http://audit.pro-cs.in/Tablez/api/Master/AuditTestHandler.ashx?caller=SaveAudit', item);
    //return this.httpClient.post<SavedAudit >('http://localhost/AuditTablez/api/Master/AuditTestHandler.ashx?caller=SaveAudit', item);
}

Post_Question_Image(item): Observable<SavedAudit >
{
  
    debugger;
    
    
  return this.httpClient.post<SavedAudit >('http://audit.pro-cs.in/Tablez/api/Master/AuditFileUpload.ashx?caller=FileUpload', item);
  //return this.httpClient.post<SavedAudit >('http://localhost/AuditTablez/api/Master/AuditTestHandler.ashx?caller=SaveAudit', item);
}




  
}
