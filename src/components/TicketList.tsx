import TicketItem from './TicketItem';

import { Ticket } from '../types';

export default function TicketList({ tickets }: {
  tickets: Ticket[];
}) {
  return (
    <ul className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
        />
      ))}
    </ul>
  );
}
