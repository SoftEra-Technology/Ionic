import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditChoiceQuestionPage } from './audit-choice-question.page';

const routes: Routes = [
  {
    path: '',
    component: AuditChoiceQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditChoiceQuestionPageRoutingModule {}
