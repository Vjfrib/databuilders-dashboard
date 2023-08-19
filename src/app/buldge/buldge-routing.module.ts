import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuldgePage } from './buldge.page';

const routes: Routes = [
  {
    path: '',
    component: BuldgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuldgePageRoutingModule {}
