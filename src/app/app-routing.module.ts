import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./folder/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./folder/notes/notes.module').then((m) => m.NotesPageModule),
  },
  {
    path: 'buldge',
    loadChildren: () =>
      import('./folder/buldge/buldge.module').then((m) => m.BuldgePageModule),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./folder/timer/timer.module').then((m) => m.TimerPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
