# eggjs-vitest

Example Repo for PR: https://github.com/vitest-dev/vitest/pull/2795

## Before

- npm install
- npm test

The output is 
```
> eggjs-vitest@1.0.0 test
> NODE_OPTIONS="-r @esbuild-kit/cjs-loader ${NODE_OPTIONS}" EGG_TYPESCRIPT=true EGG_SERVER_ENV=unittest vitest


 DEV  v0.28.4 /Users/yujie.zhou/dev/eggjs-vitest
      Coverage enabled with c8

stdout | test/home.spec.ts > Call Home Service
unittest

 ❯ test/home.spec.ts (2) 304ms
   ✓ Add
   × Call Home Service 302ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/home.spec.ts > Call Home Service
Error: See Call Stack
 ❯ HomeService.hello app/service/home.ts:2:943
 ❯ test/home.spec.ts:12:20
     10|   console.log(app.config.env);
     11|   const ctx = app.createAnonymousContext();
     12|   ctx.service.home.hello();
       |                    ^
     13| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed | 1 passed (2)
   Start at  12:16:46
   Duration  1.31s (transform 51ms, setup 0ms, collect 634ms, tests 304ms)

 % Coverage report from c8
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 home.ts  |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
```

The error call stack for app/service/hello.ts is wrong. And the coverage report is also wrong because it reports 100% coverage, but actually I only test one method.


## After Apply Patch

- npm run patch

The callstack and coverage report are both correct now.

