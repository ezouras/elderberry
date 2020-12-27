import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  showMenu: boolean = false;
  private showMenuSubscription: Subscription;
  @Input() showMenu$: Observable<void>;

  constructor() { }

  ngOnInit() {
    this.showMenuSubscription = this.showMenu$.subscribe((dontShow) => this.showMenu = dontShow);

  }

  ngOnDestroy() {
    this.showMenuSubscription.unsubscribe();
  }

}
