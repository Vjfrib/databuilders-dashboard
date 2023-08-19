import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuldgePageRoutingModule } from './buldge-routing.module';

import { BuldgePage } from './buldge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuldgePageRoutingModule
  ],
  declarations: [BuldgePage]
})
export class BuldgePageModule {}
