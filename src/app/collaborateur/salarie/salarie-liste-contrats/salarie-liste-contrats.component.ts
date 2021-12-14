import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratModel } from 'src/app/models/contrat';

@Component({
  selector: 'salarie-liste-contrats',
  templateUrl: './salarie-liste-contrats.component.html',
  styleUrls: ['./salarie-liste-contrats.component.scss']
})
export class SalarieListeContratsComponent implements OnInit {

  contratModelObj : ContratModel = new ContratModel();
  contratData !: any;

  matricule: string;

  formValue!: FormGroup;

  constructor(private api: ApiService, private formbuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private http : HttpClient) {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
  }

  getMatriculeContrats(){
    return this.http.get<any>("http://localhost:3000/contrats?matricule="+this.matricule)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      matricule : [''],
      idContrat : [''],
      typeContrat : [''],
      dateDebut : [''],
      dateFin : [''],
      societe : [''],
      section : [''],
      numContrat : [''],
      mission : [''],
      fonction : ['']
    })
    this.getLesContratsDuMatricule();
  }

  getLesContratsDuMatricule(){
    this.getMatriculeContrats()
    .subscribe(res=>{
      this.contratData = res;
    })
  }
}

