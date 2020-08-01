import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  this.navslide();  
}
  // toggleButton= document.getElementsByClassName('navbar-toggler')[0];
  // navbarLinks=document.getElementsByClassName('navbar-nav')[0];
   navslide =()=>{
    const toggleButton= document.getElementsByClassName('navbar-toggler')[0];
    const  navbarLinks=document.getElementsByClassName('navbar-nav')[0];
    toggleButton.addEventListener('click',()=>{
      navbarLinks.classList.toggle('active');
      // navbarLinks.classList.add('mobile-overlay');
    })
  }  
}
