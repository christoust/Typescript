"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate) {
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
    TodoItem.prototype.markComplete = function () {
        this.isComplete = true;
    };
    TodoItem.prototype.markIncomplete = function () {
        this.isComplete = false;
    };
    TodoItem.prototype.print = function () {
        var status = this.isComplete ? "completed" : "incomplete";
        console.log("[".concat(status, "] ").concat(this.description, " (due: ").concat(this.dueDate.toDateString(), ")"));
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (item) {
        this.items.push(item);
    };
    TodoList.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    };
    TodoList.prototype.listAll = function () {
        console.log("Tasks:");
        this.items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". "));
            item.print();
        });
    };
    TodoList.prototype.markComplete = function (item) {
        item.markComplete();
    };
    TodoList.prototype.markIncomplete = function (item) {
        item.markIncomplete();
    };
    return TodoList;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ask(question) {
    return new Promise(function (resolve) {
        rl.question(question, resolve);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var todoList, choice, description, dueDateStr, dueDate, item, index, _a, item, index, _b, item;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    todoList = new TodoList();
                    _c.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 12];
                    console.log("Menu:");
                    console.log("1. Add task");
                    console.log("2. Remove task");
                    console.log("3. List all tasks");
                    console.log("4. Mark task as complete");
                    console.log("5. Exit");
                    return [4 /*yield*/, ask("Enter your choice (1-5): ")];
                case 2:
                    choice = _c.sent();
                    if (!(choice === "1")) return [3 /*break*/, 5];
                    return [4 /*yield*/, ask("Enter task description: ")];
                case 3:
                    description = _c.sent();
                    return [4 /*yield*/, ask("Enter due date (YYYY-MM-DD): ")];
                case 4:
                    dueDateStr = _c.sent();
                    dueDate = new Date(dueDateStr);
                    item = new TodoItem(description, dueDate);
                    todoList.addItem(item);
                    console.log("Task '".concat(description, "' added."));
                    return [3 /*break*/, 11];
                case 5:
                    if (!(choice === "2")) return [3 /*break*/, 7];
                    _a = Number;
                    return [4 /*yield*/, ask("Enter task index to remove (1-".concat(todoList.items.length, "): "))];
                case 6:
                    index = _a.apply(void 0, [_c.sent()]) - 1;
                    if (index >= 0 && index < todoList.items.length) {
                        item = todoList.items[index];
                        todoList.removeItem(item);
                        console.log("Task '".concat(item.description, "' removed."));
                    }
                    else {
                        console.log("Invalid index!");
                    }
                    return [3 /*break*/, 11];
                case 7:
                    if (!(choice === "3")) return [3 /*break*/, 8];
                    todoList.listAll();
                    return [3 /*break*/, 11];
                case 8:
                    if (!(choice === "4")) return [3 /*break*/, 10];
                    _b = Number;
                    return [4 /*yield*/, ask("Enter task index to mark as complete (1-".concat(todoList.items.length, "): "))];
                case 9:
                    index = _b.apply(void 0, [_c.sent()]) - 1;
                    if (index >= 0 && index < todoList.items.length) {
                        item = todoList.items[index];
                        todoList.markComplete(item);
                        console.log("Task '".concat(item.description, "' marked as complete."));
                    }
                    else {
                        console.log("Invalid index!");
                    }
                    return [3 /*break*/, 11];
                case 10:
                    if (choice === "5") {
                        console.log("Exiting...");
                        return [3 /*break*/, 12];
                    }
                    else {
                        console.log("Invalid choice!");
                    }
                    _c.label = 11;
                case 11: return [3 /*break*/, 1];
                case 12:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) {
    console.error(err);
});
