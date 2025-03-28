import TicketList from './TicketList';
import TicketForm from './TicketForm';

import useTickets from '../hooks/useTickets';

export default function Main() {
  const { tickets } = useTickets();

  return (
    <main>
      <TicketList tickets={tickets} />
      <TicketForm />
    </main>
  );
}
