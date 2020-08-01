import { Component, OnInit } from '@angular/core';
import { ForMobileAppService} from '../for-mobile-app/for-mobile-app.service'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-for-mobile-app',
  templateUrl: './for-mobile-app.component.html',
  styleUrls: ['./for-mobile-app.component.scss']
})
export class ForMobileAppComponent implements OnInit {

  constructor(private formobileservice:ForMobileAppService) { }
  faqs=[
    {question:'How to Install App?',answer:"this is Answer1"},
    {question:'How to make an Order?',answer:"this is Answer1"},
    {question:'How to Pay?',answer:"this is Answer1"}
  ]
  ngOnInit(): void {
    // this.formobileservice.getFaq().subscribe(console.log);
    this.$faq=this.formobileservice.getFaq();
    // this.$faq.subscribe(console.log);
  }
  $faq:Observable<Object>;
}
