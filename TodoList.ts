class TodoItem {
    description: string;
    dueDate: Date;
    isComplete: boolean;
  
    constructor(description: string, dueDate: Date) {
      this.description = description;
      this.dueDate = dueDate;
      this.isComplete = false;
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
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    updateItem(item: TodoItem, newDescription: string, newDueDate: Date) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items[index].description = newDescription;
        this.items[index].dueDate = newDueDate;
      }
    }
  
    markComplete(item: TodoItem) {
      item.isComplete = true;
    }
  
    getIncompleteItems(): TodoItem[] {
      return this.items.filter((item) => !item.isComplete);
    }
  }
  
  // example usage
  const todoList = new TodoList();
  
  while (true) {
    console.log("Current tasks:");
    for (const item of todoList.items) {
      const status = item.isComplete ? "done" : "not done";
      console.log(`- ${item.description} (due ${item.dueDate.toDateString()}, ${status})`);
    }
  
    console.log("\nWhat would you like to do?");
    console.log("1. Add a task");
    console.log("2. Update a task");
    console.log("3. Delete a task");
    console.log("4. Mark a task as complete");
    console.log("5. Exit");
  
    const choice = Number(prompt("Enter your choice (1-5):"));
  
    if (choice === 1) {
      const description = prompt("Enter task description:");
      const dueDateStr = prompt("Enter due date (yyyy-mm-dd):");
      const dueDate = new Date(dueDateStr);
      const item = new TodoItem(description, dueDate);
      todoList.addItem(item);
    } else if (choice === 2) {
      const index = Number(prompt("Enter task index to update (1-" + todoList.items.length + "):")) - 1;
      if (index >= 0 && index < todoList.items.length) {
        const item = todoList.items[index];
        const newDescription = prompt("Enter new description:");
        const newDueDateStr = prompt("Enter new due date (yyyy-mm-dd):");
        const newDueDate = new Date(newDueDateStr);
        todoList.updateItem(item, newDescription, newDueDate);
      } else {
        console.log("Invalid index!");
      }
    } else if (choice === 3) {
      const index = Number(prompt("Enter task index to delete (1-" + todoList.items.length + "):")) - 1;
      if (index >= 0 && index < todoList.items.length) {
        const item = todoList.items[index];
        todoList.removeItem(item);
      } else {
        console.log("Invalid index!");
      }
    } else if (choice === 4) {
      const index = Number(prompt("Enter task index to mark as complete (1-" + todoList.items.length + "):")) - 1;
      if (index >= 0 && index < todoList.items.length) {
        const item = todoList.items
      }
    }
  