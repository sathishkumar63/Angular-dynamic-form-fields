import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { AngularMaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserOrderDetailsComponent, UsersComponent } from './components';

@NgModule({
  declarations: [UsersComponent, UserOrderDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [UsersComponent]
})
export class UsersModule {}
