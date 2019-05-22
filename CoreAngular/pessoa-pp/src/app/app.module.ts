import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from './Modal-Component'
import { NgbdModalContent } from './Modal-Component';
import { Usuario } from './Modal/Usuario';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  entryComponents: [
    NgbdModalComponent,
    NgbdModalContent
  ],
  providers: [
    Usuario
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
