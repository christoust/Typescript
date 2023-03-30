import * as readline from 'readline';

class TodoItem {
  description: string;
  dueDate: Date;
  isComplete: boolean;

  constructor(description: string, dueDate: Date) {
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = false;
  }

  markComplete() {
    this.isComplete = true;
  }

  markIncomplete() {
    this.isComplete = false;
  }

  print() {
    const status = this.isComplete ? "completed" : "incomplete";
    console.log(`[${status}] ${this.description} (due: ${this.dueDate.toDateString()})`);
  }
}

class TodoList {
  items: TodoItem[];

  constructor() {
    this.items = [];
  }

  addItem(item: TodoItem) {
    this.items.push(item);
  }

  removeItem(item: TodoItem) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  listAll() {
    console.log("Tasks:");
    this.items.forEach((item, index) => {
      console.log(`${index + 1}. `);
      item.print();
    });
  }

  markComplete(item: TodoItem) {
    item.markComplete();
  }

  markIncomplete(item: TodoItem) {
    item.markIncomplete();
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  const todoList = new TodoList();

  while (true) {
    console.log("Menu:");
    console.log("1. Add task");
    console.log("2. Remove task");
    console.log("3. List all tasks");
    console.log("4. Mark task as complete");
    console.log("5. Exit");

    const choice = await ask("Enter your choice (1-5): ");

    if (choice === "1") {
      const description = await ask("Enter task description: ");
      const dueDateStr = await ask("Enter due date (YYYY-MM-DD): ");
      const dueDate = new Date(dueDateStr);
      const item = new TodoItem(description, dueDate);
      todoList.addItem(item);
      console.log(`Task '${description}' added.`);
    } else if (choice === "2") {
      const index = Number(await ask(`Enter task index to remove (1-${todoList.items.length}): `)) - 1;
      if (index >= 0 && index < todoList.items.length) {
        const item = todoList.items[index];
        todoList.removeItem(item);
        console.log(`Task '${item.description}' removed.`);
      } else {
        console.log("Invalid index!");
      }
    } else if (choice === "3") {
      todoList.listAll();
    } else if (choice === "4") {
      const index = Number(await ask(`Enter task index to mark as complete (1-${todoList.items.length}): `)) - 1;
      if (index >= 0 && index < todoList.items.length) {
        const item = todoList.items[index];
        todoList.markComplete(item);
        console.log(`Task '${item.description}' marked as complete.`);
      } else {
        console.log("Invalid index!");
      }
    } else if (choice === "5") {
      console.log("Exiting...");
      break;
    }
    else {
        console.log("Invalid choice!");
      }
    }
  
    rl.close();
  }
  
  main().catch((err) => {
    console.error(err);
  });
