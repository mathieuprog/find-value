# find-value

Similar to Array.find(), but returns the value of the function invocation instead of the element itself

```typescript
import findValue from '@mathieuprog/find-value';

findValue([1, 2, 3], (n) => n > 2 && n * 2) // 6
findValue([1, 2, 3], (n) => n > 3 && n * 2) // undefined
```

## Install

You can get `@mathieuprog/find-value` via [npm](http://npmjs.com).

```
npm i @mathieuprog/find-value
```
