import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: 'Clean code',
        author:'Robert C Marlin',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL._SX260_.jpg',
      amount: 700
      },
      {
        name:'Pragmatic Programmer',
        author:'David Thomas',
        image:'https://m.media-amazon.com/images/I/51yaxPX4BFL._SX360_BO1,204,203,200_.jpg',
        amount: 800
      },
      {
      name: 'Quantitative Aptitude',
      author: 'R.S.Agarwal',
      image:'https://m.media-amazon.com/images/I/51ye03CBd8L._SX375_BO1,204,203,200_.jpg',
      amount:750
      },
      {
      name: 'The Psychology of Money',
      author: 'Morgan Housel',
      image:'https://m.media-amazon.com/images/I/41v+g6LqafL._SY344_BO1,204,203,200_.jpg',
      amount:850
      },
      {
      name: 'Market Wizards',
      author: 'Jack D.Schwager',
      image:'https://m.media-amazon.com/images/I/51Xh8kTlirL._SX331_BO1,204,203,200_.jpg',
      amount:780
      },
      {
      name: '100 to 1 in the Stock Market',
      author: 'Thomas Williams',
      image:'https://m.media-amazon.com/images/I/417d+ZdyAuL._SX331_BO1,204,203,200_.jpg',
      amount:650
      },
      {
      name: 'Case in Point 11',
      author: 'Mark Patrick',
      image:'https://m.media-amazon.com/images/I/41qewLLzk6S._SX382_BO1,204,203,200_.jpg',
      amount:900
      }
    ]
   
  }
}
