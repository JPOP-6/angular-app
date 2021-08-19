import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  formGroup: FormGroup;
  title = new FormControl();
  price = new FormControl();
  author = new FormControl();
  category = new FormControl();
  publisher = new FormControl();

  constructor(fb: FormBuilder,public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {
    this.formGroup = fb.group({
      title: this.title,
      price: this.price,
      author: this.author,
      category: this.category,
      publisher: this.publisher
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Submitted Successfully!!')
    this.http.post('http://localhost:8080/books', {
      "title" : this.title,
      "price" : this.price,
      "author" : this.author,
      "category" : this.category,
      "publisher" : this.publisher
    });
  }


}
