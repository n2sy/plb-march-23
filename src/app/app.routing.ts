import { RouterModule, Routes } from '@angular/router';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { EditComponent } from './edit/edit.component';
import { InfosComponent } from './infos/infos.component';
import { LoginComponent } from './login/login.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactFormComponent } from './react-form/react-form.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  // {
  //   path: 'cv',
  //   component: CvComponent,
  //   children: [
  //     { path: 'add', component: AddComponent },
  //     { path: ':id', component: InfosComponent },
  //     { path: ':id/edit', component: EditComponent },
  //   ],
  // },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: EditComponent },
    ],
  },
  { path: 'accounts', component: HomeAccountsComponent },
  {
    path: 'servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);
