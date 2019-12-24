# Regular Expressions for RxJS

RxJS implementation of [Regular Expressions for Reactive Streams](https://github.com/expressions-for-reactive-streams/spec-regular-expressions)

```
npm i exprs-rx
```

## Intro

This library allows us to apply RegExp-like syntax to Observables, in order to select events from them.

Imagine that we have three streams:

```
A  ----o---------------
B  -o-o--o--o--o---o-o-
C  --------------o-----
```

And we want to select only those emissions that happen after A and before C emits

```
A  ----o---------------
B  -.-.--o--o--o---.-.-
C  --------------o-----
```

We can do that by applying a following expression:

```
AB*C
```

This expression means:

> Take one emission from `A`
> Then take all emissions from `B`
> Until `C` emits. Take that one emission from `C` too
> Then complete

Check out this intro article for more:  
"RegExp syntax for Observables: Never Easier!"  
https://dev.to/kosich/regexp-for-reactive-streams-143g  
2 min read

## Use

Query `mousemove` events after `mousedown` and before `mouseup`

```js
import { fromEvent } from 'rxjs'; 
import { repeat } from 'rxjs/operators';
import { exec } from 'exprs-rx';

const A = fromEvent(item, 'mousedown');
const B = fromEvent(document, 'mousemove');
const C = fromEvent(document, 'mouseup');

exec('AB*C', { A, B, C })
    .pipe(
        repeat() // repeat the cycle
    )
    .subscribe(console.log);
```

Try this example:  
https://stackblitz.com/edit/rxjs-regular-expressions

## Notes

Currently, the library supports `A` — capital letters that represent a single emission of a corresponding stream.

And a repeat `A*` notation that will consume multiple events from the corresponding stream, until completion or until next entry in the regex matches.

For regex specification and plans on vocabulary, please, see this repo https://github.com/expressions-for-reactive-streams/spec-regular-expressions

by Kostia Palchyk
