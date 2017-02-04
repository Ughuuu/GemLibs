"use strict";

import { PluginComponent } from '../../gem/components/plugin.component';
import { AppComponent } from '../../gem/components/app.component';
import { LoginComponent } from '../../gem/components/login.component';
import { InstallComponent } from '../../gem/components/install.component';
import { FeaturesComponent } from '../../gem/components/features.component';
import { HomeComponent } from '../../gem/components/home.component';
import { SearchComponent } from '../../gem/components/search.component';
import { RouterModule, Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: 'features', component: FeaturesComponent },
  { path: 'install', component: InstallComponent },
  { path: 'search/:plugin',      component: SearchComponent },
  { path: 'plugin/:user/:plugin',      component: PluginComponent },
  { path: '**', component: HomeComponent }
];