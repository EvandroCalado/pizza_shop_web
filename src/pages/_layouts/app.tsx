import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <main>
      <header>Header</header>

      <div>
        <Outlet />
      </div>
    </main>
  );
};
