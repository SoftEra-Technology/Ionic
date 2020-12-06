import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenAuditPage } from './open-audit.page';

const routes: Routes = [
  {
    path: '',
    component: OpenAuditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenAuditPageRoutingModule {}
