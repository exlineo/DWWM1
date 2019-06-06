import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'', component:ProfilComponent},
  {path:'profil', component:ProfilComponent},
  {path:'chat', component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialnetRoutingModule { }
