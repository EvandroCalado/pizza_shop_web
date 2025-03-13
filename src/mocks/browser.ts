import { setupWorker } from 'msw/browser';

import { signInMock } from './sign-in-mock';

export const worker = setupWorker(signInMock);
