import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl font-bold'>Página não encontrada</h1>
      <p className='text-muted-foreground'>
        Voltar para o{' '}
        <Link
          to='/'
          className='text-sky-500 underline underline-offset-4 duration-150 hover:text-sky-600'
        >
          Dashboard
        </Link>
      </p>
    </div>
  );
};
