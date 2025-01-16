import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';

export const handlers = [myProjectList];

export const worker = setupWorker(...handlers);
