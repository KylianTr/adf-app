import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CollaborateurModel } from '../models/collaborateur';
import { ApiService } from '../services/api.service';
import { ColumnModel } from '../models/column';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title='Gestion-Collaborateur';

  collaborateurModelObj : CollaborateurModel = new CollaborateurModel();
  collaborateurData !: any;

  public opened = false;

  public close(status: any) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  formValue!: FormGroup;

  constructor(private api: ApiService, private formbuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      matricule : [''],
      nom: [''],
      prenom: [''],
      dateDebut: [''],
      dateFin: [''],
      typeCollaborateur: [''],
      section: [''],
      societe: ['']
    })
    this.getAllCollaborateur();
  }

  postCollaborateurDetails(){
    this.collaborateurModelObj.matricule = this.formValue.value.matricule;
    this.collaborateurModelObj.nom = this.formValue.value.nom;
    this.collaborateurModelObj.prenom = this.formValue.value.prenom;
    this.collaborateurModelObj.dateDebut = this.formValue.value.dateDebut;
    this.collaborateurModelObj.dateFin = this.formValue.value.dateFin;
    this.collaborateurModelObj.typeCollaborateur = this.formValue.value.typeCollaborateur;
    this.collaborateurModelObj.section = this.formValue.value.section;
    this.collaborateurModelObj.societe = this.formValue.value.societe;

    this.api.postCollaborateur(this.collaborateurModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Collaborateur bien ajouter")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCollaborateur();
    },
    err=>{
      alert("Collaborateur n'a pas pu être ajouter")
    })
  }

  getAllCollaborateur(){
    this.api.getCollaborateur()
    .subscribe(res=>{
      this.collaborateurData = res;
    })
  }
}
