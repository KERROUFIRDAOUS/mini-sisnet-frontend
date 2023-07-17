import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  client: Client;
  updateClientFormGroup: FormGroup;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {
    this.client = {} as Client;
    this.updateClientFormGroup = new FormGroup({
      firstName: new FormControl()
    });
  }

  ngOnInit() {
    const clientId = this.route.snapshot.params['id'];

    this.clientService.getClientById(clientId).subscribe(
      (existingClient: Client) => {
        this.client = existingClient;
      },
      error => {
        console.error('Error retrieving client:', error);
      }
    );
  }

  handleUpdateClient() {
    if (this.updateClientFormGroup.valid) {
      const updatedClient: Client = { ...this.client, ...this.updateClientFormGroup.value };

      this.clientService.updateClient(updatedClient).subscribe(
        (response: Client) => {
          console.log('Client updated successfully:', response);
          alert('Client updated successfully');
          this.router.navigate(['/clients']);
        },
        (error: any) => {
          console.error('Error updating client:', error);
          this.errorMessage = 'Failed to update the client.';
          alert(this.errorMessage);
        }
      );
    } else {
      console.log('Invalid form data. Please check the inputs.');
      this.errorMessage = 'Invalid form data. Please check the inputs.';
      alert(this.errorMessage);
    }
  }
}
