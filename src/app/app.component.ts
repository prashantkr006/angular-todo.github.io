import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-ToDo';

  todo: any = [
    { id: 1, value: 'Write blog' },
    { id: 2, value: 'Do Code' },
  ];

  constructor(public dialog: MatDialog){};

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent,
      {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(res => this.addData(res))
  }

  addData(item: string) {
    this.todo.push({id: this.todo.length+1 , value: item})
    console.log(this.todo)
  }

  removeTask(id: number) {
    this.todo = this.todo.filter((task: { id: number; }) => task.id !== id);
  }
}
