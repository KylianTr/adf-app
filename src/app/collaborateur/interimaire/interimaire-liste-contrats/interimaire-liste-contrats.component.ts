import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'interimaire-liste-contrats',
  templateUrl: './interimaire-liste-contrats.component.html',
  styleUrls: ['./interimaire-liste-contrats.component.scss']
})
export class InterimaireListeContratsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  contrats: any[] = [];

  getContrats(){
    this.httpClient.get('https://api.jsonbin.io/b/61a0eb7d62ed886f91551019')
      .subscribe((contrats: any)=> {
        this.contrats = contrats;
      });
  }

  ngOnInit(): void {
  }

}
