import { Skeleton } from '../ui/skeleton';

export const PaginationSkeleton = () => {
  return (
    <div className='flex items-center justify-between'>
      <Skeleton className='h-5 w-[136px]' />
      <div className='flex items-center gap-4 lg:gap-8'>
        <Skeleton className='h-5 w-[90px]' />
        <Skeleton className='h-9 w-[168px]' />
      </div>
    </div>
  );
};
