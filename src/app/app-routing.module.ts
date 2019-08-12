import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { JcrComponent } from './pages/jcr/jcr.component';
import { NewsComponent } from './pages/news/news.component';
import { TimetableComponent } from './pages/timetable/timetable.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'jcr',
    component: JcrComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
