import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

//export interface Usuario { Nombres: string, Apellidos: string, Idetificacion: number; Correo:string, Telefono: number, Celular: number, Direccion: string, Barrio: string, Edad: number, genero: number; }
export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private itemDoc: AngularFirestoreDocument<Item>;
  items: Observable<Item>;

  constructor(private afs: AngularFirestore) { 
    this.itemDoc = afs.doc<Item>('items/1');
    this.items = this.itemDoc.valueChanges();
  }

  listaItems(){
    return this.items;
  }
}
