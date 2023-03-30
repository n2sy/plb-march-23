import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { FirstService } from './services/first.service';
import { RecruesComponent } from './recrues/recrues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PLB_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    DetailsComponent,
    ListeComponent,
    ItemComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    HomeAccountsComponent,
    ItemAccountComponent,
    AddAccountComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruesComponent,
    AccueilComponent,
    NavbarComponent,
    InfosComponent,
    AddComponent,
    EditComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, PLB_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
