import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse, The480_WStill } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

public gifList: Gif[] = [];


private _tagsHistory: string[] = []
private apiKey:     string = 'Rk9l2MHPptiE3Miz3XTBAzrQsErS51fc'
private serviceUrl: string = 'http://api.giphy.com/v1/gifs';



 constructor( private http: HttpClient) {
this.loadLocalStorage();
 }


 get tagsHistory() {
  return [...this._tagsHistory]
 }


 // Organizar las busquedas / validar que no se repuitan
 organizeHistory( tag : string) {
   tag = tag.toLocaleLowerCase();

   if (this._tagsHistory.includes(tag)) {
  this._tagsHistory = this._tagsHistory.filter( ( oldTag) =>  oldTag !== tag)
   }
   this._tagsHistory.unshift(tag);
   this._tagsHistory = this._tagsHistory.splice(0.10);
   this.saveLocalStorage();
  }


//Guardar el historial en el local Storage
private saveLocalStorage(): void {
  localStorage.setItem( 'history', JSON.stringify(this._tagsHistory))
}


//Cargar el local storage
private loadLocalStorage(): void {
  if ( !localStorage.getItem('history')) return

  this._tagsHistory = JSON.parse( localStorage.getItem('history')!);

  if (this._tagsHistory.length === 0) return

    this.searchTag(this._tagsHistory[0])

}

  searchTag (tag:string): void {
    if (tag.length === 0) return;
    this._tagsHistory.unshift(tag);

    this.organizeHistory(tag);

       const params = new HttpParams()
       .set( 'api_key', this.apiKey )
       .set( 'limit', 10  )
       .set( 'q', tag )

       this.http.get<SearchResponse>( `${this.serviceUrl}/search`, { params })
       .subscribe( resp=> {

        this.gifList = resp.data;
        //console.log({gifs: this.gifList});


       })




    }



 }




