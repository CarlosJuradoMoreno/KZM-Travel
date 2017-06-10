// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home';


// Route Configuration
export const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent }

];




export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
