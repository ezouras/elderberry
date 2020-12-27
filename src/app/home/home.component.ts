import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMenu$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clickedHome() {
    this.showMenu$.next(false);
  }

}
