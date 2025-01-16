import '@testing-library/jest-dom';
import { setupWorker } from 'msw/browser';
import { handlers } from './src/mock/browser';

export const server = setupWorker(...handlers);

beforeAll(() => {
  server.start();
});

afterEach(() => {
  server.resetHandlers();

  vi.clearAllMocks();
});

afterAll(() => {
  vi.resetAllMocks();

  server.stop();
});

vi.mock('zustand');

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
