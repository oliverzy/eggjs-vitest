import { test, expect } from 'vitest';
import egg from 'egg';

test('Call Home Service', async () => {
  const app = await egg.start({ ignoreWarning: true });
  const ctx = app.createAnonymousContext();
  ctx.service.home.hello();
});