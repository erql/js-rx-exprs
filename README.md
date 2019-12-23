# Regular Expressions for RxJS

RxJS implementation of [Regular Expressions for Reactive Streams](../spec-regular-expressions)

## Intro

"RegExp syntax for Observables: Never Easier!"  
https://dev.to/kosich/regexp-for-reactive-streams-143g  
2 min read

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

Currently, the library supports `A` — capital letters that represent a single emission of a corresponding stream.

And a repeat `A*` notation that will consume multiple events from the corresponding stream, until completion or until next entry in the regex matches.

For regex specification and plans on vocabulary, please, see this repo https://github.com/expressions-for-reactive-streams/spec-regular-expressions

(c) Kostia Palchyk
