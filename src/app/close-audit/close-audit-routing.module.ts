import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloseAuditPage } from './close-audit.page';

const routes: Routes = [
  {
    path: '',
    component: CloseAuditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloseAuditPageRoutingModule {}
