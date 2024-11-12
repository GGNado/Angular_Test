import {Component, input, output, signal} from '@angular/core';
import {type Task} from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

    task = input<Task>();
    closeWindows = output<boolean>();
    buttonName = input.required<string>();
    confirmName = input.required<string>();

    closeForm() {
        this.closeWindows.emit(false);
    }
}
