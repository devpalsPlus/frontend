import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';

const handlers = [myProjectList];

export const worker = setupWorker(...handlers);
