import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfUserType:Array<any>=[
    {idUserType:1,title:'Company'},
    {idUserType:2,title:'Client'}
  ];

}
