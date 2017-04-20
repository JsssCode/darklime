import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.sass']
})
export class ContactHeaderComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  currentChannel: string;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

  SendNumber(newItem){

    this.items.push({ channel: this.currentChannel, item: newItem, new: true });

  }

  ChangeCommunicationChannel(newValue){

    this.currentChannel = newValue;

  }
}
