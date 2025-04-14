import { memo, useEffect } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

import useUpdateTicketStatus from '../hooks/useUpdateTicketStatus';

import { Ticket } from '../types';

function TicketItem({ ticket }: {
  ticket: Ticket;
}) {
  const updateTicketStatus = useUpdateTicketStatus();

  const handleClick = () => {
    updateTicketStatus(/* TODO: Implement updateTicketStatus */);
  };

  return (
    <li>
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <button
        className="status"
        onClick={handleClick}
      >
        {ticket.status === 'open' ? 'Open' : 'Closed'}
      </button>
      <CommentList comments={ticket.comments} />
      <CommentForm ticketId={ticket.id} />
    </li>
  );
}

export default memo(TicketItem);
