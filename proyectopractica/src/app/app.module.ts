import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import {} from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    ListComponent, 
    HolaMundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
