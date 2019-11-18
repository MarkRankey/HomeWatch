import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddADeviceComponent } from './components/addadevice/addadevice.component';
import { DeviceDisplayComponent } from './components/devicedisplay/devicedisplay.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'addadevice', component: AddADeviceComponent},
  {path: 'devicedisplay', component: DeviceDisplayComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SettingsComponent,
    AddADeviceComponent,
    DeviceDisplayComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
