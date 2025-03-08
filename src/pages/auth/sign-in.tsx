import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { LoaderCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

import { signin } from '@/api/sign-in';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export const SignIn = () => {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
    resolver: zodResolver(signInForm),
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signin,
  });

  const handleSubmitForm = async (data: SignInForm) => {
    try {
      await authenticate({ email: data.email });

      toast.success('Enviamos um link para o seu email.');
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
              Acessar painel
            </h1>
            <p className='text-muted-foreground text-sm'>
              Acompanhe as vendas de sua loja
            </p>
          </div>

          <form className='space-y-8' onSubmit={handleSubmit(handleSubmitForm)}>
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-sm'>
                Email
              </Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <Button className='w-full cursor-pointer' disabled={isSubmitting}>
              {isSubmitting ? (
                <div className='flex items-center gap-2'>
                  Acessando... <LoaderCircle className='animate-spin' />
                </div>
              ) : (
                'Acessar painel'
              )}
            </Button>
          </form>

          <Button asChild variant={'link'}>
            <Link to='/sign-up'>Criar uma conta</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
