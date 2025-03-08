import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { LoaderCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

import { signup } from '@/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  });

  const { mutateAsync: registerRestaurant } = useMutation({
    mutationFn: signup,
  });

  const handleSubmitForm = async (data: SignUpForm) => {
    try {
      await registerRestaurant({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      });

      toast.success('Restaurante criado com sucesso.');
      navigate(`/sign-in?email=${data.email}`);
    } catch {
      toast.error('Algo deu errado, tente novamente.');
    }
  };

  return (
    <>
      <Helmet title='Sign In' />

      <div className='p-5'>
        <div className='flex w-[320px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Criar conta grátis
            </h1>
            <p className='text-muted-foreground text-sm'>
              Seja um parceiro e se destaque nas vendas
            </p>
          </div>

          <form className='space-y-8' onSubmit={handleSubmit(handleSubmitForm)}>
            <div className='space-y-4'>
              <div>
                <Label htmlFor='restaurantName' className='text-sm'>
                  Nome do restaurante
                </Label>
                <Input
                  id='restaurantName'
                  type='text'
                  {...register('restaurantName')}
                />
              </div>

              <div>
                <Label htmlFor='managerName' className='text-sm'>
                  Nome
                </Label>
                <Input
                  id='managerName'
                  type='text'
                  {...register('managerName')}
                />
              </div>

              <div>
                <Label htmlFor='email' className='text-sm'>
                  Email
                </Label>
                <Input id='email' type='email' {...register('email')} />
              </div>

              <div>
                <Label htmlFor='phone' className='text-sm'>
                  Telefone
                </Label>
                <Input id='phone' type='tel' {...register('phone')} />
              </div>
            </div>

            <Button className='w-full cursor-pointer' disabled={isSubmitting}>
              {isSubmitting ? (
                <div className='flex items-center gap-2'>
                  Cadastrando... <LoaderCircle className='animate-spin' />
                </div>
              ) : (
                'Cadastrar'
              )}
            </Button>
          </form>

          <Button asChild variant={'link'}>
            <Link to='/sign-in'>Já tenho uma conta</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
