type Falsy = false | 0 | "" | null | undefined 

export default function findValue<T, U>(array: T[], fun: (element: T) => U | Falsy): U | undefined {
  for (let i = 0; i < array.length; ++i) {
    const value = fun(array[i]);
    if (value) {
      return value;
    }
  }

  return undefined;
}
