import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfoServersComponent } from './info-servers/info-servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeServersComponent,
    InfoServersComponent,
    EditServerComponent,
  ],
  imports: [CommonModule, SUB_ROUTING, FormsModule],
})
export class SubModule {}
