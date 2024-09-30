import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];
  onAdd(ticketdata: {title: string, text:string}){
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticketdata.title,
      request: ticketdata.text,
      status: 'open'
    };
    this.tickets.push(ticket);
  }

}
