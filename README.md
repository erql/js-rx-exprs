# Regular Expressions for reactive streams

RxJS implementation of [Regular EXPressions for Reactive Streams](../rexprs-spec)

## Intro

Provided a regex (tagged string with observables), we create an Observable of Observables.
That Observable emits Observables that represent capture groups from the regex.
e.g.:

```ts
tag`(${click})` : Observable<Observable<ClickEvent>>
```

This will emit one capture group, that emits one click event and then completes
