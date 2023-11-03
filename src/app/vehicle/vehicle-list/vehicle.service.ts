import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    private apiUrl: string = 'https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json';

    constructor(private http: HttpClient) { }

    getVehicles() : Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(this.apiUrl);
      }

}
