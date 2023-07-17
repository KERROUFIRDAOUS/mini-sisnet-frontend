import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../services/client.service";
import {Client} from "../model/client.model";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit{

  newClientFormGroup! : FormGroup;
  constructor(private fb:FormBuilder, private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.newClientFormGroup=this.fb.group({
      id_person : this.fb.control(null, Validators.required),
      numclient : this.fb.control(null, Validators.required),
      clientname : this.fb.control(null, Validators.required),
      lastname1 : this.fb.control(null, Validators.required),
      lastname2 : this.fb.control(null, Validators.required),
      doctype : this.fb.control(null, Validators.required),
      docnume : this.fb.control(null, Validators.required),
      birthdate : this.fb.control(null, Validators.required),
      sexe : this.fb.control(null, Validators.required),
      country : this.fb.control(null, Validators.required),
      language : this.fb.control(null, Validators.required),
      id_domicile_fk : this.fb.control(null),
      entrydate : this.fb.control(null, Validators.required)
    })
  }

  handleSaveClient() {
    let client:Client=this.newClientFormGroup.value;
    this.clientService.saveClient(client).subscribe({
      next : data =>{
        alert("Client had been successfuly saved!");
      },
      error : err => {
        console.log(err);
      }
    });

  }
}
