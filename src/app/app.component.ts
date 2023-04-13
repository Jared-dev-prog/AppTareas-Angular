import { Component } from '@angular/core';
import { ITask } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppTareas';

  nameTask: string = '';
  tasks: ITask[] = [];

  constructor() {}

  // Add a new task
  addNewTask(): void {
    const newTask: ITask = {
      id: Math.random().toString(36).substring(2),
      name: this.nameTask,
      state: false,
    };

    this.tasks.push(newTask);
    this.nameTask = '';
  }

  //Delete a task
  deleteTask(id: string): void {
    const newTasks = this.tasks.filter((task) => task.id !== id);
    this.tasks = newTasks;
  }

  //Update a task
  updateTask(id: string): void {
    const updateStateTask = this.tasks.map((task) => {
      if (task.id === id) {
        const newState: ITask = {
          id: task.id,
          name: task.name,
          state: !task.state,
        };
        return newState;
      }
      return task;
    });
    this.tasks = updateStateTask;
  }
}
