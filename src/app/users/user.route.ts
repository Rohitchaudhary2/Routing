import { Routes } from "@angular/router";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";
import { TasksComponent } from "../tasks/tasks.component";
import { TasksService } from "../tasks/tasks.service";

export const userRoutes: Routes = [
    {
        path: '',
        providers: [TasksService],
        children:[
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'prefix'
            },
            {
                path: 'tasks',
                component: TasksComponent
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
                canDeactivate: [canLeaveEditPage]
            }
        ]
    }
    
]