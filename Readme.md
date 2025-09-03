## ** 1 – Introduction & Setup**

### 📖 Learn:

* What Node.js is:

  * Open-source JavaScript runtime built on Chrome’s V8 engine.
  * Single-threaded, event-driven, non-blocking IO.
  * Great for scalable backend apps.
* Install:

  * [Download Node.js](https://nodejs.org/) (LTS version).
  * Verify with `node -v` and `npm -v`.
* Hello World in Node.js (`hello.js`).

<<<<<<< Updated upstream
```js
console.log("Hello, Node.js 🚀");
```

### 🛠️ Practice:

* Run `node hello.js`.
* Try printing `process.version`, `process.platform`, `process.cwd()`.
* Use `node` REPL: type JS commands directly in terminal.

### 💡 Pro Tips:

* Prefer LTS (stable) Node.js version.
* Use `nvm` (Node Version Manager) if you’ll work with multiple projects.

### 🎯 Goal:

Be comfortable running Node scripts and understand its purpose.

---

## ** 2 – Modules & File System**

### 📖 Learn:

* CommonJS (`require`) vs ES Modules (`import`).
* Node built-in modules:

  * `fs` → file system
  * `path` → working with file/directory paths
  * `os` → system information

### 🛠️ Practice:

* Create a file `test.txt` and write/read with `fs`.

```js
import fs from "fs";

fs.writeFileSync("test.txt", "Node.js is awesome!");
console.log(fs.readFileSync("test.txt", "utf-8"));
```

* Play with `path`:

```js
import path from "path";
console.log(path.join(__dirname, "test.txt"));
```

* Check system info:

```js
import os from "os";
console.log("CPU:", os.cpus());
console.log("Memory:", os.totalmem());
```

### Mini Project:

* Build a script `logger.js` that saves logs into a file with timestamps.

### 🎯 Goal:

Know how to use Node.js core modules.

---

## ** 3 – NPM & Packages**

### 📖 Learn:

* npm: Node Package Manager.
* `package.json` → stores project metadata and dependencies.
* Install packages: `npm install chalk`.
* Semantic versioning:

  * `^1.2.3` → latest minor/patch updates
  * `~1.2.3` → only patch updates

### 🛠️ Practice:

```bash
npm init -y
npm install chalk
```

```js
import chalk from "chalk";
console.log(chalk.blue("Hello in blue!"));
```

### Exercises:

* Install and use `lodash` to manipulate arrays/objects.
* Explore `nodemon` for auto-restarting your app.

### 🎯 Goal:

Be confident using npm and adding dependencies.

---

## ** 4 – Asynchronous JavaScript**

### 📖 Learn:

* Why async matters (non-blocking IO).
* Patterns:

  * Callbacks
  * Promises
  * async/await
* Event loop basics.

### 🛠️ Practice:

Fetch data with `node-fetch`.

```js
import fetch from "node-fetch";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(await res.json());
}
getData();
```

### Exercises:

* Rewrite same function using `.then()` instead of `await`.
* Use `setTimeout` and observe execution order.

### 🎯 Goal:

Understand async code and avoid callback hell.

---

## ** 5 – HTTP & REST API Basics**

### 📖 Learn:

* Built-in `http` module.
* Why Express.js simplifies backend development.
* Basic concepts: routes, middleware, response.

### 🛠️ Practice:

```js
import express from "express";
const app = express();

app.get("/", (_req, res) => res.send("Hello API"));

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

### Exercises:

* Add a `/about` route returning JSON.
* Use middleware `express.json()` to parse JSON body.

### 🎯 Goal:

Spin up your own API server with routes.

---

## ** 6 – JSON & CRUD Operations**

### 📖 Learn:

* JSON → JavaScript Object Notation.
* CRUD: Create, Read, Update, Delete.
* API design basics.

### 🛠️ Practice:

Build simple **in-memory tasks API**.

```js
import express from "express";
const app = express();
app.use(express.json());

let tasks = [];

app.post("/tasks", (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});

app.get("/tasks", (_req, res) => res.json(tasks));
```

### Exercises:

* Add `PUT /tasks/:id` (update task).



Answers 
 
* Add `GET /tasks/:id` (get single task).

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

* Add `DELETE /tasks/:id`.


### 🎯 Goal:

Understand CRUD operations with Express.

---

## ** 7 – Mini Project + Wrap Up**

### 📖 Learn:

* Databases: brief intro (MongoDB, PostgreSQL).
* Environment variables with `dotenv`.

### 🛠️ Mini Project:

Build a **Todo API** with Express:

* Endpoints:

  * `POST /todos` → create todo
  * `GET /todos` → list todos
  * `PUT /todos/:id` → update todo
  * `DELETE /todos/:id` → delete todo
* Store in JSON file (`fs`) or just in memory.

### 🎯 Goal:

You can now design, code, and run a small backend API.

---

# ✅  :

* Node.js fundamentals.
* Built-in modules (`fs`, `path`, `os`).
* npm packages & semantic versioning.
* Async JavaScript (callbacks, promises, async/await).
* Express.js basics (routes, middleware).
* CRUD API development.

---

👉 Next Step: Would you like me to **expand this even more into a workbook style** with **daily coding challenges and quiz questions** so you can test yourself after each day?
=======
 
# CRUD Operations in MongoDB using Mongoose ( Create, Read, Update, Delete )



>>>>>>> Stashed changes
