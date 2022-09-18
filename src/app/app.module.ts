import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyDirective } from './only.directive';
import { FilsComponent } from './fils/fils.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { VoterComponent } from './test/voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlyDirective,
    FilsComponent,
    ParentComponent,
    TestComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
