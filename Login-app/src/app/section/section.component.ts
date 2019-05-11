import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  items:  any;

  constructor(private conexion:ConexionService) { 
    this.conexion.listaItems().subscribe(item=>{
      this.items = item;
      console.log("algo",this.items)
    })
  }

  ngOnInit() {
  }

  clickAceptarLogin(){
   
  }

}
