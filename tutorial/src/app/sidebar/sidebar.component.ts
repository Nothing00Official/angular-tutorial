import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loading: boolean = false;
  users: User[] = new Array();

  episode: Episode;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers()
    this.loadEpidsodeData("role27", "Nothing00");
  }

  loadUsers(): void {
    this.loading = true;
    this.http.get<User[]>('https://test.craftuniversity.it/api.php?request=users').subscribe(res => {
      this.users = res;
      this.loading = false;
    });
  }

  loadEpidsodeData(title: string, username: string): void {
    this.loading = true;
    this.http.get<Episode>('https://test.craftuniversity.it/api.php?request=currentEp&title=' + title + '&username=' + username).subscribe(res => {
      this.episode = res;
      this.loading = false;
    });
  }

  createEpisode(num: number, title: string, descr: string, startrec: string) {
    this.loading = true;
    this.http.post("https://test.craftuniversity.it/api.php", {
      request: "createEpisode",
      num: num,
      descr: descr,
      startrec: startrec,
      title: title
    }).subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }

}
