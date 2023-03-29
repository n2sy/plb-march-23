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

@NgModule({
  declarations: [AppComponent, FirstComponent, ChildComponent, CvComponent, DetailsComponent, ListeComponent, ItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
