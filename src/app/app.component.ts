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
      name: this.nameTask,
      state: false,
    };

    this.tasks.push(newTask);
    this.nameTask = '';
  }

  //Delete a task
  deleteTask(name: string): void {
    const newTasks = this.tasks.filter((task) => task.name !== name);
    this.tasks = newTasks;
  }

  //Update a task
  updateTask(name: string): void {
    const updateStateTask = this.tasks.map((task) => {
      if (task.name === name) {
        const newState: ITask = {
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
