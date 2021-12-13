import { TodoItem } from "./todo-item";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Çağrı";
        this.items = [
            { description: "Shopping", status: true },
            { description: "Feed the dog", status: true },
            { description: "Homework", status: false }
        ]
    }
}