## CODE 1

### Output

undefined
8
8
9
10
undefined

### Lexical Environment 

1. Global Execution Context (EC)

- **Creation Phase**
  - Outer: `null`
  - LE: `{ a: undefined, b: undefined, c: undefined }`
  - TDZ: `{ x }`

- **Execution Phase**
  - LE: `{ a: 5, b: 10, c: function, x: undefined }`

---

#### 2. `c` Function Execution Context

- **Creation Phase**
  - Outer: Global
  - LE: `{ arguments:obj a: 8, b: 9, c: 10, f: undefined }`
  - TDZ: `{ x }`

- **Execution Phase**
  - LE: `{ a: 8, b: 9, c: 10, f: function, x: 10 }`

---

#### 3. `f` Function Execution Context

- **Creation Phase**
  - Outer: `c`
  - LE: `{ arguments: obj, a: 8, b: 9, c: 10 }`
  - TDZ: `{ x }`

- **Execution Phase**
  - LE: `{ a: 8, b: 10, c: 10, x: 5 }`

----

## Code 2

### Output
81
25

### Lexical Environment 

1. Global Execution Context (EC)

- **Creation Phase**
  - Outer: `null`
  - LE: `{ x: undefined, myFunction: undefined }`
  - TDZ: `{}`

- **Execution Phase**
  - LE: `{ x: 9, myFunction: function }`

---

2. `myFunction` Execution Context (1st Call)

- Outer: Global
- LE: `{}`

---

3. Global Variable Update

- `x = 5` (global variable updated)

---

4. `myFunction` Execution Context (2nd Call)

- Outer: Global
- LE: `{}`

---

## Code 3

### Output

10

### Lexical Environment

1. Global Execution Context (EC)

- **Creation Phase**
  - Outer: null
  - Lexical Environment (LE): { foo: undefined, bar: function }
  - Temporal Dead Zone (TDZ): {}

- **Execution Phase**
  - LE: { foo: 1, bar: function }

---

2. bar Function Execution Context
- **Creation Phase**
  - Outer: Global
  - LE: { foo: undefined }
  - TDZ: {}

- **Execution Phase**
  - LE: { foo: 10 }