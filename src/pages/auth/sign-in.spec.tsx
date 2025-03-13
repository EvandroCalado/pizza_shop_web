import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router';

import { queryClient } from '@/lib/react-query';
import { SignIn } from '.';

describe('<SignIn />', () => {
  it('should set default email value if email is provided on search params', () => {
    render(<SignIn />, {
      wrapper: ({ children }) => (
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={['/sign-in?email=test@example.com']}>
              {children}
            </MemoryRouter>
          </QueryClientProvider>
        </HelmetProvider>
      ),
    });

    const emailInput = screen.getByLabelText('Email');

    expect(emailInput).toHaveValue('test@example.com');
  });
});
