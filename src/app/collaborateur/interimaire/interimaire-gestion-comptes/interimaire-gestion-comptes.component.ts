import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteModel } from 'src/app/models/compte';

@Component({
  selector: 'interimaire-gestion-comptes',
  templateUrl: './interimaire-gestion-comptes.component.html',
  styleUrls: ['./interimaire-gestion-comptes.component.scss']
})
export class InterimaireGestionComptesComponent implements OnInit {

  compteModelObj : CompteModel = new CompteModel();
  comptesData !: any;

  matricule: string;

  formValue!: FormGroup;

  constructor(private api: ApiService, private formbuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private http : HttpClient) {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
  }

  getMatriculecomptes(){
    return this.http.get<any>("http://localhost:3000/comptes?matricule="+this.matricule)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      matricule : [''],
      nomLogiciel : [''],
      identifiant : [''],
      mdp : [''],
      dateOuverture : [''],
      dateExpiration : [''],
      modifiable : [''],
      mission : ['']
    })
    this.getLescomptesDuMatricule();
  }

  getLescomptesDuMatricule(){
    this.getMatriculecomptes()
    .subscribe(res=>{
      this.comptesData = res;
    })
  }

}
