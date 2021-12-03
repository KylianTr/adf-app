import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'salarie-liste-contrats',
  templateUrl: './salarie-liste-contrats.component.html',
  styleUrls: ['./salarie-liste-contrats.component.scss']
})
export class SalarieListeContratsComponent implements OnInit {

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
