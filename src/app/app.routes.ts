import { Routes } from '@angular/router';
import { AboutComponent } from './features/components/about/about.component';
import { ContactComponent } from './features/components/contact/contact.component';
import { ExpressBuilderComponent } from './features/components/express-builder/express-builder.component';
import { HomeComponent } from './features/components/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { InterviewQuestionComponent } from './features/components/interview-question/interview-question.component';
import { TemplateDrivenFormComponent } from './features/components/template-driven-form/template-driven-form.component';
import { MomentsComponent } from './features/components/moments/moments.component';
import { RxjsComponent } from './features/components/rxjs/rxjs.component';
import { ChangeDetectionComponent } from './features/components/change-detection/change-detection.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'express-builder', component: ExpressBuilderComponent },
      { path: 'interview-questions', component: InterviewQuestionComponent },
      {
        path: 'articles/form/template-driven',
        component: TemplateDrivenFormComponent,
      },
      { path: 'articles/form/reactive', component: ExpressBuilderComponent },
      { path: 'moments', component: MomentsComponent },
      { path: 'article/rxjs', component: RxjsComponent },
      { path: 'cd', component: ChangeDetectionComponent },
    ],
  },
];
