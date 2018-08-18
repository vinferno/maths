import { Component, OnInit } from '@angular/core';
import {routesApp} from '../app-routing.module';

@Component({
  selector: 'vf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navList = routesApp;

  constructor() { }

  ngOnInit() {
  }
}
