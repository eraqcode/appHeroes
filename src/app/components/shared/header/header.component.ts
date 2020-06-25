import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor( private router: Router ) {}
  mostrarInput:boolean = true;
  mostrarNavBar:boolean = true;
  
  ngOnInit(): void {
    
    if(window.innerWidth < 1024 ){
      this.mostrarInput = false;
      this.mostrarNavBar = false;
    }
    window.onresize = () => {
      this.mostrarInput = window.innerWidth >= 1024;
      this.mostrarNavBar = window.innerWidth >= 1024;        
      
    }
  }
  
  buscarHeroe( termino: string ) {
    this.router.navigate( ['/buscador', termino] )
  }  

}


