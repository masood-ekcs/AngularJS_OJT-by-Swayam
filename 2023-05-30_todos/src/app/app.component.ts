import { Component } from '@angular/core';
import { TODO } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  id = 0;
  toDoTasks: any[] = [];
  deleteId!: any[];

  addTask(task: HTMLInputElement): boolean {
    // console.log(task.value)
    this.id++;
    this.toDoTasks.push({ id: this.id, task: task.value });
    //this.toDoTasks.push(new TODO(this.id, task.value)) // This means => {id: this.id, task: task.value}

    // But since we have specify a custom data type so that we could access it in our html
    // We created this custom data type (class) in model file
    // We give toDoTask the custom data type of TODO.
    // TODO (Class that we created that defines our structure => {id: this.id, task: task.value} )
    // When we say new TODO(id,task) and pass id and task.
    // This means that instead of we say => {id: this.id, task: task.value}
    // Our TODO class creates this => {id: this.id, task: task.value} structure for us \
    // We just have to pass the values

    console.log(this.toDoTasks);
    return false;
  }

  deleteAllTask(): void {
    this.toDoTasks = []; // to clear the array by assigning an empty array
  }

  deleteTask(id: any) {
    this.deleteId = this.toDoTasks.filter((obj) => {
      return obj.id != id;
    });
    // console.log(this.deleteId);
    this.toDoTasks = this.deleteId;
  }
}
