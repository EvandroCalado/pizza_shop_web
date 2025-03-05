import { Helmet } from 'react-helmet-async';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SignIn = () => {
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

          <form className='space-y-8'>
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-sm'>
                Email
              </Label>
              <Input id='email' type='email' />
            </div>

            <Button className='w-full cursor-pointer'>Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  );
};
