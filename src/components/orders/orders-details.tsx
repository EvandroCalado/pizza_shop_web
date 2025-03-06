import { Search } from 'lucide-react';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export const OrderDetails = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='sm' className='cursor-pointer'>
          <Search className='size-3' />
          <span className='sr-only'>Detalhes do pedido</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pedido: 1231564649878</DialogTitle>
          <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='text-muted-foreground'>Status</TableCell>
                <TableCell className='flex items-center justify-end'>
                  <div className='flex items-center gap-2'>
                    <span className='size-2 rounded-full bg-zinc-400' />
                    <span className='text-muted-foreground font-medium'>
                      Pendente
                    </span>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>Cliente</TableCell>
                <TableCell className='flex items-center justify-end'>
                  Evandro Calado da Silva
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>
                  Telefone
                </TableCell>
                <TableCell className='flex items-center justify-end'>
                  (87) 99999-9999
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>Email</TableCell>
                <TableCell className='flex items-center justify-end'>
                  evandro@email.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>
                  Realizado
                </TableCell>
                <TableCell className='flex items-center justify-end'>
                  Há 3 minutos
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className='text-right'>Qtd.</TableHead>
                <TableHead className='text-right'>Preço</TableHead>
                <TableHead className='text-right'>Subtotal</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Pizza calabresa G</TableCell>
                <TableCell className='text-right'>2</TableCell>
                <TableCell className='text-right'>R$ 49,90</TableCell>
                <TableCell className='text-right'>R$ 99,80</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>Pizza Mussarela G</TableCell>
                <TableCell className='text-right'>3</TableCell>
                <TableCell className='text-right'>R$ 49,90</TableCell>
                <TableCell className='text-right'>R$ 149,70</TableCell>
              </TableRow>
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell className='font-medium'>Total</TableCell>
                <TableCell className='text-right'>5</TableCell>
                <TableCell colSpan={2} className='text-right'>
                  R$ 249,50
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
