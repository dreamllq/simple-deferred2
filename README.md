# simple-deferred2

A lightweight `Deferred` implementation for browser and Node.js, written in TypeScript.

## Install

```bash
npm install simple-deferred2
```

## Usage

```typescript
import Deferred from 'simple-deferred2';

function fetchData() {
  const deferred = new Deferred<{ id: number }>();

  setTimeout(() => {
    deferred.resolve({ id: 1 });
  }, 1000);

  return deferred.promise;
}

fetchData().then((data) => {
  console.log(data); // { id: 1 }
});
```

### With async/await

```typescript
const deferred = new Deferred<string>();

socket.on('message', (msg) => {
  deferred.resolve(msg);
});

const message = await deferred.promise;
console.log(message);
```

### Reject

```typescript
const deferred = new Deferred<void>();

setTimeout(() => {
  deferred.reject(new Error('timeout'));
}, 5000);

try {
  await deferred.promise;
} catch (err) {
  console.error(err); // Error: timeout
}
```

## API

### `new Deferred<T>()`

Creates a new Deferred instance.

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `promise` | `Promise<T>` | The inner Promise |
| `resolve` | `(value: T \| PromiseLike<T>) => void` | Resolves the promise |
| `reject` | `(reason?: any) => void` | Rejects the promise |

The instance is frozen after construction (`Object.freeze`).

## License

[MIT](./LICENSE)
