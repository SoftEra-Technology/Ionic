import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {UnitManager} from '../Model/UnitManager'
@Component({
  selector: 'app-unit-manager-login',
  templateUrl: './unit-manager-login.page.html',
  styleUrls: ['./unit-manager-login.page.scss'],
})
export class UnitManagerLoginPage implements OnInit {

  constructor(private navParams: NavParams, public modalController: ModalController) { }
  public UMobject = new UnitManager();
  public comment_um :string = this.navParams.get('comment');
  public UMId :string = this.navParams.get('UMId') ;
  public PASS :string =this.navParams.get('PASS')
  
  ngOnInit() {
  }


  save_Comment()
  {
    //this.comment="this is not good thing";
    this.dismiss()
  }
  close_Comment()
  {
    this.dismiss();

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
   let UMobject1 = new UnitManager();
   UMobject1.UMId= this.UMId;
   UMobject1.UMPASS =this.PASS;
   UMobject1.UComment = this.comment_um;
    this.modalController.dismiss(UMobject1);
    //, this.UMId, this.PASS
  }



}
