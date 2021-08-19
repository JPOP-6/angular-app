import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from './books/books.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
