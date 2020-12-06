import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAuditPageRoutingModule } from './list-audit-routing.module';

import { ListAuditPage } from './list-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAuditPageRoutingModule
  ],
  declarations: [ListAuditPage]
})
export class ListAuditPageModule {}
