import { Blank } from './blank-layout/blank.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthLayoutComponent, AdminLayoutComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    Blank
  ]
})
export class LayoutModule { }
