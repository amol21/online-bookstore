import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books :Book[]=[];
  /*books :Book[]=[
    {
      sku:"text-100",
      name:"C Programming Language",
      description:"Learn C Programming Language",
      unitPrice:600,
      imageUrl:"assets/images/books/text-100.png",
      active:true,
      unitsInStock:100,
      createdOn:new Date(),
      updatedOn:null,
    },
    {
      sku:"text-101",
      name:"C# crash course",
      description:"Learn C# Programming Language",
      unitPrice:900,
      imageUrl:"assets/images/books/text-101.png",
      active:true,
      unitsInStock:100,
      createdOn:new Date(),
      updatedOn:null,
    },
    {
      sku:"text-102",
      name:"java  course",
      description:"Learn java Programming Language",
      unitPrice:1200,
      imageUrl:"assets/images/books/text-102.png",
      active:true,
      unitsInStock:100,
      createdOn:new Date(),
      updatedOn:null,
    },
    {
      sku:"text-103",
      name:"dbms course",
      description:"Learn dbms Programming Language",
      unitPrice:500,
      imageUrl:"assets/images/books/text-103.png",
      active:true,
      unitsInStock:100,
      createdOn:new Date(),
      updatedOn:null,
    },
    {
      sku:"text-104",
      name:"spring framework course",
      description:"Learn spring framework",
      unitPrice:1100,
      imageUrl:"assets/images/books/text-104.png",
      active:true,
      unitsInStock:100,
      createdOn:new Date(),
      updatedOn:null,
    },
    {
      sku:"text-105",
      name:"mongodb",
      description:"Learn mongodb ",
      unitPrice:500,
      imageUrl:"assets/images/books/text-105.png",
      active:true,
      unitsInStock:100,
      createdOn:new Date(),
      updatedOn:null,
    }
  ]*/
  constructor(private _bookService:BookService){}
  ngOnInit()
  {
    this.listBooks();   
  }
  listBooks()
  {
    this._bookService.getBooks().subscribe(
      data=>
      {
        this.books=data;
        //console.log(data);  
      }
    )
  }
}
