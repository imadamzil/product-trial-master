import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Environement } from '../environement/environement';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = Environement.apiUrl; 

  constructor(private http :HttpClient) { }
}
