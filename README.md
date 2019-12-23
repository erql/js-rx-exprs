# Regular Expressions for reactive streams in RxJS

RxJS implementation of [Regular Expressions for Reactive Streams](../spec-regular-expressions)

## Install

```
npm i exprs-rx
```

## Use

```js
import { exec } from 'exprs-rx';

// const A = ...
// const B = ...
// const C = ...

exec('AB*C', { A, B, C })
    .pipe(
        // ...
    )
    .subscribe(console.log);
```



(c) Kostia Palchyk