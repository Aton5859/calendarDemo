import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  constructor(
    public navCtrl: NavController,
    private calendar: Calendar
  ) {
    this.data = {
      title: "",
      location: "",
      notes: ""
    };
  }

  check() {
    let hasPermission = this.calendar.hasReadWritePermission();
    console.log(hasPermission);
    alert(hasPermission);
  }

  create() {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(20);
    this.calendar.createEvent(
      this.data.title,
      this.data.location,
      this.data.notes,
      startDate, //若同时设置起止日期，则日期中间每天都会有该日程
      endDate
    );
  }
}
