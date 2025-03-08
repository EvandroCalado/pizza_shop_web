import { zodResolver } from '@hookform/resolvers/zod';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { getManagedRestaurant } from '@/api';
import { Button } from '../ui/button';
import {
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
  });

  const { register, handleSubmit } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>Atualize suas informações</DialogDescription>
      </DialogHeader>

      <form>
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
          <Button type='button' variant='outline'>
            Cancelar
          </Button>
          <Button type='submit'>Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
