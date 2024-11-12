import {Component, input, output} from '@angular/core';
import {TasksComponent} from "../tasks.component";
import {type Task} from "./task.model";
import {NewTaskComponent} from "../new-task/new-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
    imports: [
        NewTaskComponent
    ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    needEdit = false;

    task = input.required<Task>();
    complete = output<string>()
    edit = output<string>()

    onEdit() {
        this.needEdit = true;
    }

    onComplete() {
        this.complete.emit(this.task().id);
    }

    onCloseForm() {
        this.needEdit = false;
    }
}
