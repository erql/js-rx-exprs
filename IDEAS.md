# Ideas

## separate regex from it's arguments

```js
expression('ABC').exec({ A, B, C })
```

## use tag fn to create regular expressions

### Examples

DnD:

```js
tag`(${mousedown}${mousemove}*${mouseup})*`
```

Consequent clicks:

```js
tag`(${click}${click})*`
```

Consequent clicks w/o outside clicking:

```js
tag`(${click} ^${outsideClick} ${click})`
```

Timely clicks:

```js
tag`(${click} ${click})5ms`
```
