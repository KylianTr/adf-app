import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'salarie-fiche-collab',
  templateUrl: './salarie-fiche-collab.component.html',
  styleUrls: ['./salarie-fiche-collab.component.scss']
})
export class SalarieFicheCollabComponent implements OnInit {

  matricule: string;

  formValue!: FormGroup;

  collaborateurData !: any;

  getSalarie(){
    return this.http.get<any>("http://localhost:3000/collaborateurs?matricule="+this.matricule)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  constructor(private api: ApiService, private formbuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private http : HttpClient) {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
  }

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      matricule : [''],
      nom: [''],
      prenom: [''],
      dateNaiss: [''],
      sexe: [''],
      section: [''],
      codeSAP: [''],
      societe: [''],
      typeCollaborateur: [''],
      societePaye: [''],
      dateDebut: [''],
      dateFin: [''],
      dateEntreeSite: [''],
      mobile: [''],
      email: [''],
      fax: [''],
      superieurHierarchique: [''],
      notes: ['']

    })
    this.getAllCollaborateur();
  }

  getAllCollaborateur(){
    this.getSalarie()
    .subscribe((res: any)=>{
      this.collaborateurData = res;
    })
  }

}
