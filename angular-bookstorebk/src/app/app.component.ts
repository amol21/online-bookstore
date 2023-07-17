import { Component } from '@angular/core';
import { Book } from './common/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bookstore';
  books :Book[]=[
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
  ]
}
