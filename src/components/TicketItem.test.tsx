import { beforeEach, describe, it, vi } from 'vitest';

import { render, screen } from '@testing-library/react';

import TicketItem from './TicketItem';

import { Ticket } from '../types';

const context = describe;

describe('TicketItem', () => {
  const ticket: Ticket = {
    id: 1,
    title: 'TITLE',
    description: 'DESCRIPTION',
    status: 'open',
    comments: [
      { id: 1, content: 'COMMENT' },
    ],
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  function renderTicketItem() {
    render(
      <TicketItem ticket={ticket} />
    );
  }

  it('renders title and description', () => {
    renderTicketItem();

    screen.getByText('TITLE');
    screen.getByText('DESCRIPTION');
  });

  it('renders status', () => {
    renderTicketItem();

    screen.getByText(/Open/);
  });

  it('renders comments', () => {
    renderTicketItem();

    screen.getByText('COMMENT');
  });

  context('when user clicks toggle button', () => {
    it('calls API', () => {
      renderTicketItem();

      // TODO: Write test code here
    });
  });

  context('when user submits comment', () => {
    it('calls API', () => {
      renderTicketItem();

      // TODO: Write test code here
    });
  });
});
