import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { SalarieComponent } from './collaborateur/salarie/salarie.component';
import { InterimaireComponent } from './collaborateur/interimaire/interimaire.component';
import { PrestataireComponent } from './collaborateur/prestataire/prestataire.component';
import { SalarieFicheCollabComponent } from './collaborateur/salarie/salarie-fiche-collab/salarie-fiche-collab.component';
import { SalarieListeContratsComponent } from './collaborateur/salarie/salarie-liste-contrats/salarie-liste-contrats.component';
import { SalarieListeApplicationsComponent } from './collaborateur/salarie/salarie-liste-applications/salarie-liste-applications.component';
import { SalarieGestionComptesComponent } from './collaborateur/salarie/salarie-gestion-comptes/salarie-gestion-comptes.component';
import { SalariePerimetreSectionComponent } from './collaborateur/salarie/Salarie-perimetre-section/salarie-perimetre-section.component';
import { InterimaireFicheCollabComponent } from './collaborateur/interimaire/interimaire-fiche-collab/interimaire-fiche-collab.component';
import { InterimaireListeContratsComponent } from './collaborateur/interimaire/interimaire-liste-contrats/interimaire-liste-contrats.component';
import { InterimaireGestionComptesComponent } from './collaborateur/interimaire/interimaire-gestion-comptes/interimaire-gestion-comptes.component';
import { InterimaireListeApplicationsComponent } from './collaborateur/interimaire/interimaire-liste-applications/interimaire-liste-applications.component';
import { InterimairePerimetreSectionComponent } from './collaborateur/interimaire/interimaire-perimetre-section/interimaire-perimetre-section.component';
import { PrestataireFicheCollabComponent } from './collaborateur/prestataire/prestataire-fiche-collab/prestataire-fiche-collab.component';
import { PrestataireGestionComptesComponent } from './collaborateur/prestataire/prestataire-gestion-comptes/prestataire-gestion-comptes.component';
import { PrestataireListeApplicationsComponent } from './collaborateur/prestataire/prestataire-liste-applications/prestataire-liste-applications.component';
import { PrestataireListeContratsComponent } from './collaborateur/prestataire/prestataire-liste-contrats/prestataire-liste-contrats.component';
import { PrestatairePerimetreSectionComponent } from './collaborateur/prestataire/prestataire-perimetre-section/prestataire-perimetre-section.component';

//Kendo Module
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CollaborateurComponent,
    SalarieComponent,
    InterimaireComponent,
    PrestataireComponent,
    SalarieFicheCollabComponent,
    SalarieListeContratsComponent,
    SalarieListeApplicationsComponent,
    SalarieGestionComptesComponent,
    SalariePerimetreSectionComponent,
    InterimaireFicheCollabComponent,
    InterimaireListeContratsComponent,
    InterimaireGestionComptesComponent,
    InterimaireListeApplicationsComponent,
    InterimairePerimetreSectionComponent,
    PrestataireFicheCollabComponent,
    PrestataireGestionComptesComponent,
    PrestataireListeApplicationsComponent,
    PrestataireListeContratsComponent,
    PrestatairePerimetreSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    IconsModule, 
    HttpClientModule, 
    DialogsModule,
    FormsModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    ReactiveFormsModule,
    GridModule,
    ExcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
