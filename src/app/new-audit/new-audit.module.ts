import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAuditPageRoutingModule } from './new-audit-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import { NewAuditPage } from './new-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewAuditPageRoutingModule
  ],
  declarations: [NewAuditPage]
})
export class NewAuditPageModule {}
