import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  public getClients():Observable<Array<Client>>{
    return this.http.get<Array<Client>>("http://localhost:8082/demo_war/restapi/client/get")
  }

  public saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>("http://localhost:8082/demo_war/restapi/client/insert", client);
  }

  public deleteClient(id : number):Observable<Client>{
    return this.http.delete<Client>("http://localhost:8082/demo_war/restapi/client/delete"+id);
  }


  searchCustomers(kw: any) {

  }
}
