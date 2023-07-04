import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ListComponent } from './list/list.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component:  SchedulerComponent},
  { path: 'dashbord', component:  DashboardComponent},
  { path: 'workflow', component:  WorkflowComponent},
  { path: 'list', component:  ListComponent},
  { path: 'report', component:  ReportComponent},
  { path: 'settings', component:  SettingsComponent},
  { path: 'info', component:  InfoComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
