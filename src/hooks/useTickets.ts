// TODO: Implement useTickets hook

import { Ticket } from '../types';

export default function useTickets() {
  const tickets: Ticket[] = [];

  return { tickets };
}
