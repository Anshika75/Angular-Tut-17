import { Routes } from '@angular/router';
import { routes as userRoutes } from './users/users.routes';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    // component: NoTaskComponent,
    redirectTo: '/users/u1',
    pathMatch: 'full'
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];