import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';

declare global {
  interface Window {
    axeRunning?: boolean;
  }
}

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
    await page.evaluate(() => {
      window.axeRunning = false;
    });
  },

  async postVisit(page) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default config;
