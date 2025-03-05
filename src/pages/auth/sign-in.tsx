import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });

  const handleSubmitForm = async (data: SignInForm) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));
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
        </div>
      </div>
    </>
  );
};
