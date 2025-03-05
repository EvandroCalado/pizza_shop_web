import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <main>
      <header>Header</header>

      <div>
        <Outlet />
      </div>
    </main>
  );
};
