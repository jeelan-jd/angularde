import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ListComponent } from './list/list.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FilterrightComponent } from './scheduler/filterright/filterright.component';
import { FilterleftComponent } from './filterleft/filterleft.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkflowComponent,
    SchedulerComponent,
    ListComponent,
    ReportComponent,
    SettingsComponent,
    InfoComponent,
    SidebarComponent,
    HeaderComponent,
    BodyComponent,
    NotfoundComponent,
    FilterrightComponent,
    FilterleftComponent,
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
