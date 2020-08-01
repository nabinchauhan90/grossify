import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'grossify';
  resetPosition() {
    let myDiv = document.getElementById("detail");
    myDiv.scrollTop = 0;
  }
}
