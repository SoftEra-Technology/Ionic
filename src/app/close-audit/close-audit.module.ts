import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloseAuditPageRoutingModule } from './close-audit-routing.module';

import { CloseAuditPage } from './close-audit.page';
import { QuestionCommentPageModule } from '../question-comment/question-comment.module';
import {UnitManagerLoginPageModule} from '../unit-manager-login/unit-manager-login.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitManagerLoginPageModule,
    QuestionCommentPageModule,
    CloseAuditPageRoutingModule
  ],
  declarations: [CloseAuditPage]
})
export class CloseAuditPageModule {}
