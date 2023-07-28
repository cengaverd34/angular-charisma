import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from 'src/app/charisma/api/product';
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {NgForm} from "@angular/forms";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private baseURL = "http://localhost:9090/api/v1/getAllProducts";
    constructor(private http: HttpClient) { }
    getProductsSmall() {
        return this.http.get<any>('assets/charisma/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }


    public addProduct(product: FormData): Observable<Product>{
        return this.http.post<Product>("http://localhost:9090/addNewProduct", product);
    }


    // getProducts() {
    //     return this.http.get<any>('assets/charisma/data/products.json')
    //         .toPromise()
    //         .then(res => res.data as Product[])
    //         .then(data => data);
    // }
    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.baseURL}`).pipe(
            tap(data=>console.log(JSON.stringify(data))),
            catchError(this.handlerError)
        );
    }


    createProduct(product: Product): Observable<Object>{

        return this.http.post(`${this.baseURL}`, product );
    }



    getProductsMixed() {
        return this.http.get<any>('assets/charisma/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/charisma/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersLarge() {
        return this.http.get<any>('assets/charisma/data/products-orders.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }
    handlerError(err:HttpErrorResponse){
        let errorMessage=''
        if(err.error instanceof ErrorEvent){
            errorMessage='Create errro' + err.error.message;
        }
        else{
            errorMessage='systemError';
        }
        return throwError(errorMessage)
    }
}
