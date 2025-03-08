import { zodResolver } from '@hookform/resolvers/zod';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { getManagedRestaurant, updateProfile } from '@/api';
import { Button } from '../ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const profileSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
});

type ProfileForm = z.infer<typeof profileSchema>;

export const ProfileModel = () => {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  });

  const { mutateAsync: updateProfileMutation } = useMutation({
    mutationFn: updateProfile,
  });

  const handleUpdateProfile = async (data: ProfileForm) => {
    try {
      await updateProfileMutation(data);

      toast.success('Perfil atualizado com sucesso.');
    } catch {
      toast.error('Algo deu errado, tente novamente.');
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>Atualize suas informações</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className='mb-8 space-y-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Nome
            </Label>
            <Input id='name' className='col-span-3' {...register('name')} />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-right'>
              Descrição
            </Label>
            <Textarea
              id='description'
              className='col-span-3'
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              Cancelar
            </Button>
          </DialogClose>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? (
              <span className='animate-pulse'>Salvando...</span>
            ) : (
              <span>Salvar</span>
            )}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
