import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { queryClient } from '@/lib/react-query';
import { Header } from '.';

describe('<Header />', () => {
  it('should render a highlight navLink when active', () => {
    render(<Header />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={['/orders']}>{children}</MemoryRouter>
        </QueryClientProvider>
      ),
    });

    expect(screen.getByRole('link', { name: 'Pedidos' })).toBeInTheDocument();
  });
});
