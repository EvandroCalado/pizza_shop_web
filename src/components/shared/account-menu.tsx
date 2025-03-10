import { useMutation, useQuery } from '@tanstack/react-query';
import { Building, ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

import { getManagedRestaurant, getProfile, signOut } from '@/api';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Skeleton } from '../ui/skeleton';
import { ProfileModal } from './profile-modal';

export const AccountMenu = () => {
  const navigate = useNavigate();

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  });

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity,
    });

  const { mutateAsync: signOutMutation, isPending: isSigningOut } = useMutation(
    {
      mutationFn: signOut,
      onSuccess: () => navigate('/sign-in', { replace: true }),
    },
  );

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            className='flex cursor-pointer items-center gap-2 select-none'
          >
            {isLoadingManagedRestaurant ? (
              <Skeleton className='h-4 w-28' />
            ) : (
              managedRestaurant?.name
            )}
            <ChevronDown className='size-4' />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' className='w-56'>
          <DropdownMenuLabel className='flex flex-col'>
            {isLoadingProfile ? (
              <div className='space-y-1.5'>
                <Skeleton className='h-4 w-32' />
                <Skeleton className='h-3 w-24' />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className='text-muted-foreground text-xs'>
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DialogTrigger asChild>
            <DropdownMenuItem className='cursor-pointer'>
              <Building className='mr-2 size-4' /> <span>Perfil</span>
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem
            className='cursor-pointer'
            asChild
            disabled={isSigningOut}
          >
            <button onClick={() => signOutMutation()} className='w-full'>
              <LogOut className='mr-2 size-4' /> <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProfileModal />
    </Dialog>
  );
};
