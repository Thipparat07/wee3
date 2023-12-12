import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MemberComponent } from './pages/member/member.component';
import { ProfileComponent } from './pages/member/profile/profile.component';
import { ListComponent } from './pages/member/list/list.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    {
      path: 'member',
      component: MemberComponent,
      children: [
        { path: 'list', component: ListComponent },
        { path: 'profile', component: ProfileComponent },
      ],
    },
  ];
