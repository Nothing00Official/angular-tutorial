import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: User[] = new Array();

  constructor(public tservice: TutorialService) { }

  ngOnInit(): void {
    this.tservice.downloadUsers().subscribe(res => {
      this.users = res;
    })
  }

}
