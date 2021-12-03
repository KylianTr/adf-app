import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'salarie-liste-applications',
  templateUrl: './salarie-liste-applications.component.html',
  styleUrls: ['./salarie-liste-applications.component.scss']
})
export class SalarieListeApplicationsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  applications: any[] = [];

  getApplications(){
    this.httpClient.get('https://api.jsonbin.io/b/61a4926501558c731ccaa8cb')
      .subscribe((applications: any)=> {
        this.applications = applications;
      });
  }

  ngOnInit(): void {
  }

}
