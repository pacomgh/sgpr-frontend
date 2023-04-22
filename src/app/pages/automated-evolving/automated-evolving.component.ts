import { Component } from '@angular/core';

@Component({
  selector: 'app-automated-evolving',
  templateUrl: './automated-evolving.component.html',
  styleUrls: ['./automated-evolving.component.css']
})
export class AutomatedEvolvingComponent {

  formatLabel(value: number) {
    return value + '%';
  }

  isShowDiv = true;

  toggleTaskDiv() {
    var taskTitle = document.getElementById("task-title");
    var containerTask = document.getElementById("container-task");
    taskTitle!.classList.toggle("task-title-toggle-style");
    containerTask!.classList.toggle("container-task-toggle-style");
    this.isShowDiv = !this.isShowDiv;
  }

  // toggle() {
  //   var element = document.getElementById("task-title");
  //   element!.classList.toggle("mystyle");
  // }

}
