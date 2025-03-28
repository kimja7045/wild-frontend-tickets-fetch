import { memo, useEffect } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

import useToggleTicketStatus from '../hooks/useToggleTicketStatus';

import { Ticket } from '../types';

function TicketItem({ ticket }: {
  ticket: Ticket;
}) {
  const toggleTicketStatus = useToggleTicketStatus();

  const handleClick = () => {
    toggleTicketStatus({ ticket });
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
