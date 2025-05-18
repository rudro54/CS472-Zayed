| Method                  | Type            | Blocking?     | Use Case                         | Example                                                             |
|-------------------------|------------------|----------------|----------------------------------|---------------------------------------------------------------------|
| `fs.readFileSync()`     | Synchronous       | Blocking    | Small files during startup       | `const data = fs.readFileSync('file.txt', 'utf8');`                |
| `fs.readFile()`         | Async Callback    | Non-blocking| Common async file reading        | `fs.readFile('file.txt', 'utf8', (err, data) => { ... });`         |
| `fs.promises.readFile()`| Async Promise     | Non-blocking| Cleaner async with async/await   | `const data = await fs.promises.readFile('file.txt', 'utf8');`     |
| `fs.createReadStream()` | Streaming         | Non-blocking| Large files / stream to client   | `fs.createReadStream('file.txt').pipe(res);`                       |
