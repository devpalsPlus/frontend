import { createRoot } from 'react-dom/client';
import App from './App.tsx';

async function mountApp() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mock/browser');
    await worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <>
      <App />
    </>
  );
}

mountApp();
