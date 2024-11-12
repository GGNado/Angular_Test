import { Component, input, output} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
    imports: [
        TaskComponent,
        NewTaskComponent
    ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    name = input.required<String>();
    idUser = input.required<String>();

    needAdd = false;
    buttonName: string = 'Add task';

    dummyTasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]

    get selectedTasks() {
        return this.dummyTasks.filter(task => task.userId === this.idUser());
    }

    onAddTask() {
        this.needAdd = !this.needAdd;
        this.buttonName = this.needAdd ? 'Close' : 'Add task';
    }

    onCompleteTask(taskId: String) {
        this.dummyTasks = this.dummyTasks.filter(task => task.id !== taskId);
    }

    onCloseForm() {
        this.needAdd = false;
        this.buttonName = 'Add task';
    }

    onEditTask(taskId: string) {
        const taskToEdit = this.dummyTasks.find(task => task.id === taskId);
        taskToEdit!.title = 'Updated task title';
    }

    protected readonly onclose = onclose;
}
