import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-question-comment',
  templateUrl: './question-comment.page.html',
  styleUrls: ['./question-comment.page.scss'],
})
export class QuestionCommentPage implements OnInit {

  constructor(private navParams: NavParams, public modalController: ModalController) { }
  
  public comment :string = this.navParams.get('comment');
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
    this.modalController.dismiss(this.comment);
  }


}
