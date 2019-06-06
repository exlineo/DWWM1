import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { ChatComponent } from './chat/chat.component';
import { SocialnetRoutingModule } from './socialnet-routing.module';

@NgModule({
  declarations: [ProfilComponent, ChatComponent],
  imports: [
    CommonModule,
    SocialnetRoutingModule
  ]
})
export class SocialnetModule { }
