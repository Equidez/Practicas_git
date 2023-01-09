import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 person: any = [{
  Nombre : 'Daniel',
  Apellido : 'Santacruz',
  Localidad : [{
    Ciudad : 'Durango',
    Pais : 'Mexico',
    Localidad :'Durango'
  },
    {
      
        Ciudad : 'Durango',
        Pais : 'Mexico',
        Localidad :'Durango'
    }
  ],
  Dinero : 500,
  Status : null
 }];
  
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    console.log("Boton");
  }
 
  


}
