import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TutorialService } from './tutorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  username: string = null;
  user: string = "Nothing00";
  id: string = "ciao-mondo";

  constructor(public tservice: TutorialService, public router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })


    this.tservice.userChanged$.subscribe(user => {
      this.user = user; console.log(user)
    })
    setTimeout(() => {
      this.tservice.changeUser(this.user);
    }, 500)
  }
}
