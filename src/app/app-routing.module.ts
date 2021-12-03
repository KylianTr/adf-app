import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { SalarieComponent } from './collaborateur/salarie/salarie.component';
import { InterimaireComponent } from './collaborateur/interimaire/interimaire.component';
import { PrestataireComponent } from './collaborateur/prestataire/prestataire.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'collaborateurs/:typeCollaborateur/:matricule', component: CollaborateurComponent},
  { path: 'salarie/:matricule', component: SalarieComponent},
  { path: 'interimaire/:matricule', component: InterimaireComponent},
  { path: 'prestataire/:matricule', component: PrestataireComponent},
  { path: '**', component: HomeComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CollaborateurComponent
]