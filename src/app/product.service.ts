import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ProductService {
  _albumUr = '../assets/album.json';

  constructor(
    private _http: Http
  ) { }

  ngOnInit(){
    
  }
  
  getAlbum(id:number){
   return this._http.get(this._albumUr).map(response => response.json())
  }
}
