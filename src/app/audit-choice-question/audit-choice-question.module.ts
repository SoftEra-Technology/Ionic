import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditChoiceQuestionPageRoutingModule } from './audit-choice-question-routing.module';

import { AuditChoiceQuestionPage } from './audit-choice-question.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { QuestionCommentPageModule } from '../question-comment/question-comment.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionCommentPageModule,
    AuditChoiceQuestionPageRoutingModule
  ],
  providers: [Camera],
  declarations: [AuditChoiceQuestionPage]
})
export class AuditChoiceQuestionPageModule {}
