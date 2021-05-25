import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  title: string;
  user: string;

  toUpload: any = new Array();
  progress: number = 0;

  error: string;

  constructor(public route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('id');
      this.user = params.get('user');
    })
   }

  ngOnInit(): void {
  }

  onDrag(event) {
    if (event.length > 1) {
      this.error = "*Non è possibile caricare più di un file.";
    } else {
      let fileName = event[0].name;
      let split = fileName.split(".");
      let ext = split[split.length - 1].toLowerCase();
      if (ext != "pdf") {
        this.error = "*Il file caricato non risulta essere un file PDF";
      } else {
        if (event[0].size > 28000000) {
          this.error = "*Il file è troppo grande, si prega di comprimerlo. (Max 12MB)";
        } else {
          this.toUpload.push(event[0]);
          this.error = null;
        }
      }
    }
  }

  send(): void {
    this.progress = 0;
    let formData = new FormData();
    formData.append('file', this.toUpload[0], this.toUpload[0].name);
    formData.append('request', "UPLOAD");
    this.error = null;
    this.http.post('http://tutorial.craftuniversity.it/upload.php', formData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(events => {
        if (events.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(events.loaded / events.total * 100);
        } else if (events.type === HttpEventType.Response) {
          let res = events.body;
          if (res[0] == "OK") {
            this.toUpload = new Array();
            this.error = "File caricato con successo!";
          } else {
            this.error = res[1];
          }
        }
      });

  }

}
