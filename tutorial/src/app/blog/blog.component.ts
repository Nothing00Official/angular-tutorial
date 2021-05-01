import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  users: User[] = new Array();

  user: string;

  constructor(public tservice: TutorialService) {
    this.tservice.userChanged$.subscribe(user => { console.log(user)
      this.user = user;
    })
    //this.tservice.changeUser(this.user);
  }

  ngOnInit(): void {
    this.tservice.downloadUsers().subscribe(res => {
      this.users = res;
    })
  }

  change(input: HTMLInputElement){
    this.tservice.changeUser(input.value);
  }

}
