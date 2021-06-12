import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(private title: Title, private meta: Meta) { 
    this.title.setTitle("404 - Pagina non trovata");
    this.meta.updateTag({ name: 'description', content: "questa pagina non esiste" });
    this.meta.updateTag({ name: 'keywords', content: "tutorial, homepage, sito in angular, errore 404" });
  }

  ngOnInit(): void {
  }

}
