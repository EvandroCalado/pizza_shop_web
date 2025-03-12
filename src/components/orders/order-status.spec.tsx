import { render, screen } from '@testing-library/react';

import { OrderStatus } from './order-status';

describe('Order Status', () => {
  it('should display correctly status', () => {
    const { rerender } = render(<OrderStatus status='pending' />);

    expect(screen.getByText('Pendente')).toBeInTheDocument();

    rerender(<OrderStatus status='processing' />);

    expect(screen.getByText('Em preparo')).toBeInTheDocument();

    rerender(<OrderStatus status='canceled' />);

    expect(screen.getByText('Cancelado')).toBeInTheDocument();

    rerender(<OrderStatus status='delivering' />);

    expect(screen.getByText('Em entrega')).toBeInTheDocument();

    rerender(<OrderStatus status='delivered' />);

    expect(screen.getByText('Entregue')).toBeInTheDocument();
  });
});
