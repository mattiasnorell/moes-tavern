import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from './angularfire.config';

import { AppComponent } from './app.component';
import { CellarListComponent } from './cellar-list/cellar-list.component';
import { CellarListItemComponent } from './cellar-list-item/cellar-list-item.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { AddBeerFormComponent } from './add-beer-form/add-beer-form.component';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginFormComponent } from './login-form/login-form.component';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { FilterListPipePipe } from './filter-list-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CellarListComponent,
    CellarListItemComponent,
    AddBeerComponent,
    AddBeerFormComponent,
    LoginFormComponent,
    NavigationSidebarComponent,
    FilterListPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
