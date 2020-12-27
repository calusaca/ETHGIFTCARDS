import { RedeemComponent } from './user-web/redeem/redeem.component';
import { LendingAdminComponent } from './lending/lending-admin/lending-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './point-of-sale/pos/pos.component';


const routes: Routes = [
  { path: 'LendingAdmin', component: LendingAdminComponent },
  { path: 'POS', component: PosComponent },
  { path: 'Redeem', component: RedeemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
