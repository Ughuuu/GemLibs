import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Components
import { PluginComponent } from './gem/components/plugin.component';
import { AppComponent } from './gem/components/app.component';
import { LoginComponent } from './gem/components/login.component';
import { InstallComponent } from './gem/components/install.component';
import { FeaturesComponent } from './gem/components/features.component';
import { HomeComponent } from './gem/components/home.component';
import { SearchComponent } from './gem/components/search.component';
import { SignUpComponent } from './gem/components/signup.component';

// Services
import { PluginService } from './gem/services/plugin.service';

// Router
import { AppRoutes } from './gem/routes/index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    PluginService,
    Title,
    LoginComponent,
    SignUpComponent
  ],
  declarations: [
    PluginComponent,
    AppComponent,
    LoginComponent,
    InstallComponent,
    FeaturesComponent,
    HomeComponent,
    SearchComponent,
    SignUpComponent
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [LoginComponent, SignUpComponent]
})
export class AppModule { }
