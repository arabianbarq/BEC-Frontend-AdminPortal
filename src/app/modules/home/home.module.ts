import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotpswdComponent } from './components/forgotpswd/forgotpswd.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [LoginComponent, ForgotpswdComponent,PrivacyPolicyComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
