import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})

export class StudentlistComponent implements OnInit {

  id:number = 0;
  name:string = '';

 public lnames: Student[] = [
   {id :1, name :'java', email:'java@java.ocm', phone:123123,college:'BITS'},
   {id :2, name :'.net', email:'java@java.ocm', phone:123123,college:'BITS'},
   {id :3, name :'spring', email:'java@java.ocm', phone:123123,college:'BITS'}
];

  constructor() { }

  ngOnInit(): void {

    let names: string[] = ['.net', 'java', 'spring'];
    for(var index in names)
    {
      console.log(names[index]);
    }
  }
  
}
