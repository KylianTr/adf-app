import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.scss']
})
export class CollaborateurComponent implements OnInit {

  typeCollaborateur!: string;
  matricule: string;

  constructor(private activatedRoute: ActivatedRoute,  private router: Router) {
    this.typeCollaborateur = this.activatedRoute.snapshot.params['typeCollaborateur'];
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
  }



  ngOnInit(): void {
    if(this.typeCollaborateur=="Salarié"){
      this.router.navigate( ['/salarie', this.matricule]);
    }else{
      if(this.typeCollaborateur=="Intérimaire"){
        this.router.navigate( ['/interimaire', this.matricule ]);
      }else{
        if(this.typeCollaborateur=="Prestataire"){
          this.router.navigate( ['/prestataire', this.matricule ]);
        }
      }
    }
  }
}
