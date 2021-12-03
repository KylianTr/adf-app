import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() title: string = '';

  retourAccueil(){
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {
  }

}
