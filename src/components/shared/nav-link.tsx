import { Link, LinkProps, useLocation } from 'react-router';

import { cn } from '@/lib/utils';

type NavLinkProps = LinkProps;

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={cn(
        'text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium duration-150',
        {
          'text-foreground': pathname === props.to,
        },
      )}
      {...props}
    />
  );
};
