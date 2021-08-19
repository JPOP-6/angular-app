import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'price', 'author'];
  public dataSource: any;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '2500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  getBooks() {
    this.http.get('https://jsonblob.com/api/jsonBlob/e3bee7af-00e6-11ec-91b6-1dd2bf571c10').subscribe(
      content => {this.dataSource = content
      console.log(content)
      }
    )
  }
}
