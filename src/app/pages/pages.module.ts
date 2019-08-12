import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JcrComponent } from './jcr/jcr.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [JcrComponent, TimetableComponent, NewsComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
