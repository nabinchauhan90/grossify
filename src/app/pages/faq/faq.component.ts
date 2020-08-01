import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForMobileAppService } from 'src/app/for-mobile-app/for-mobile-app.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private formobileservice:ForMobileAppService) { }
  ngOnInit(): void {
    // this.formobileservice.getFaq().subscribe(console.log);
    this.$faq=this.formobileservice.getFaq();
    this.$faq.subscribe(console.log);
  }
  $faq:Observable<Object>;
}
