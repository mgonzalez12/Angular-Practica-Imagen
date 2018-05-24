import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable()
export class ImageService {
	images: Image[] =[
	new Image('1','Primera Imagen','Descripcion primera imagen','http://videotutoriales.com/maspa/maspa1.jpg','http://videotutoriales.com/maspa/maspa1-1.jpg'),
	new Image('2','Segunda Imagen','Descripcion segunda imagen','http://videotutoriales.com/maspa/maspa2.jpg','http://videotutoriales.com/maspa/maspa2-1.jpg'),
	new Image('3','Tercera Imagen','Descripcion tercera imagen','http://videotutoriales.com/maspa/maspa3.jpg','http://videotutoriales.com/maspa/maspa3-1.jpg'),
	new Image('4','Cuarta Imagen','Descripcion cuarta imagen','http://videotutoriales.com/maspa/maspa4.jpg','http://videotutoriales.com/maspa/maspa4-1.jpg'),
	new Image('5','Quinta Imagen','Descripcion 	quinta imagen','http://videotutoriales.com/maspa/maspa5.jpg','http://videotutoriales.com/maspa/maspa5-1.jpg'),
	new Image('6','Secta Imagen','Descripcion secta imagen','http://videotutoriales.com/maspa/maspa6.jpg','http://videotutoriales.com/maspa/maspa6-1.jpg'),
	new Image('7','Septima Imagen','Descripcion septima imagen','http://videotutoriales.com/maspa/maspa7.jpg','http://videotutoriales.com/maspa/maspa7-1.jpg'),
	new Image('8','Octava Imagen','Descripcion octava imagen','http://videotutoriales.com/maspa/maspa8.jpg','http://videotutoriales.com/maspa/maspa8-1.jpg'),

	];
  constructor() { }
  getImages(){
  	return this.images;
  }
}
