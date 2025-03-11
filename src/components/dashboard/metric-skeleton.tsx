import { Skeleton } from '../ui/skeleton';

export const MetricSkeleton = () => {
  return (
    <>
      <Skeleton className='h-5 w-36' />
      <Skeleton className='h-4 w-52' />
    </>
  );
};
