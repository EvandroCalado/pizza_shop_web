import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Pagination } from './pagination';

const mockedOnPageChange = vi.fn();

describe('Pagination', () => {
  beforeEach(() => {
    mockedOnPageChange.mockClear();
  });

  it('should render the amount of pages correctly', () => {
    render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );

    expect(screen.getByText('Página 1 de 20')).toBeInTheDocument();
    expect(screen.getByText('Total de 200 registros')).toBeInTheDocument();
  });

  it('should render next page correctly', async () => {
    render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={mockedOnPageChange}
      />,
    );

    const nextButton = screen.getByRole('button', { name: 'Próxima página' });

    const user = userEvent.setup();

    await user.click(nextButton);

    expect(mockedOnPageChange).toHaveBeenCalledWith(1);
  });

  it('should render previous page correctly', async () => {
    render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={mockedOnPageChange}
      />,
    );

    const prevButton = screen.getByRole('button', { name: 'Página anterior' });

    const user = userEvent.setup();

    await user.click(prevButton);

    expect(mockedOnPageChange).toHaveBeenCalledWith(4);
  });

  it('should render first page correctly', async () => {
    render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={mockedOnPageChange}
      />,
    );

    const firstPageButton = screen.getByRole('button', {
      name: 'Primeira página',
    });

    const user = userEvent.setup();

    await user.click(firstPageButton);

    expect(mockedOnPageChange).toHaveBeenCalledWith(0);
  });

  it('should render last page correctly', async () => {
    render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={mockedOnPageChange}
      />,
    );

    const lastPageButton = screen.getByRole('button', {
      name: 'Última página',
    });

    const user = userEvent.setup();

    await user.click(lastPageButton);

    expect(mockedOnPageChange).toHaveBeenCalledWith(19);
  });
});
