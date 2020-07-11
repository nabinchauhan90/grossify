import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-mobile-app',
  templateUrl: './for-mobile-app.component.html',
  styleUrls: ['./for-mobile-app.component.scss']
})
export class ForMobileAppComponent implements OnInit {

  constructor() { }
  faqs=[
    {question:'How to Install App?',answer:"this is Answer1"},
    {question:'How to make an Order?',answer:"this is Answer1"},
    {question:'How to Pay?',answer:"this is Answer1"}
  ]
  ngOnInit(): void {
  }
}
