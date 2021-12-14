import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationModel } from 'src/app/models/app';

@Component({
  selector: 'interimaire-liste-applications',
  templateUrl: './interimaire-liste-applications.component.html',
  styleUrls: ['./interimaire-liste-applications.component.scss']
})
export class InterimaireListeApplicationsComponent implements OnInit {

  applicationModelObj : ApplicationModel = new ApplicationModel();
  applicationsData !: any;

  matricule: string;

  formValue!: FormGroup;

  constructor(private api: ApiService, private formbuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private http : HttpClient) {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
  }

  getMatriculeapplications(){
    return this.http.get<any>("http://localhost:3000/applications?matricule="+this.matricule)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      matricule : [''],
      nomApplication : [''],
      droit : ['']
    })
    this.getLesapplicationsDuMatricule();
  }

  getLesapplicationsDuMatricule(){
    this.getMatriculeapplications()
    .subscribe(res=>{
      this.applicationsData = res;
    })
  }

}
