import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserOrderDetailsComponent, UsersComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UserOrderDetailsComponent },
      { path: 'user-order-details', component: UserOrderDetailsComponent },
    ]
  },
  { path: '**', redirectTo: '/user-order-details' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
