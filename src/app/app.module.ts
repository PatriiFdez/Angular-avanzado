import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import * as $ from 'jquery';
// import { EditorModule } from '@tinymce/tinymce-angular';

// Importar nuestro nuevo modulo
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';

// Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

import { AnimalService } from './services/animal.service';
import { UploadService } from './services/upload.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    // EditorModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders,
    AnimalService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
