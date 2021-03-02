import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl).pipe(tap(o => console.log('All: ' + JSON.stringify(o))), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.error.message);
    return throwError(err.error.message);
  }
}
