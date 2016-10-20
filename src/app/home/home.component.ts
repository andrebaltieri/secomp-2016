import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

  save() {
    this.items.push({ name: 'Test' });
    // items.update('key-of-some-data', { size: newSize });
    // items.remove('key-of-some-data');
  }
}
