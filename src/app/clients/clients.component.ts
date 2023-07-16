import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../services/client.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Client} from "../model/client.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  clients! : Observable<Array<Client>>;
  errorMessage! : string;
  searchFormGroup! : FormGroup | undefined;

  constructor(private clientService : ClientService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.clients=this.clientService.getClients().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handlesearchGroup() {

  }


  handleDeleteCustomer(c: Client) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.clientService.deleteClient(c.id_person).subscribe({
      next : (resp) => {
        this.clients=this.clients.pipe(
          map(data=>{
            let index=data.indexOf(c);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }

  handleUpdateCustomer(c: Client) {

  }
}
