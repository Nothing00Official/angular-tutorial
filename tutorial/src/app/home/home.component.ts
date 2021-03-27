import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() user: string;

  today: Date;

  money: number;

  @ViewChild('about', { static: false }) aboutElement: ElementRef;

  show: boolean = false;

  size: string = "none";

  constructor() {
    this.today = new Date();

    let money1 = 2345345433;
    let money2 = 343453545;

    this.money = this.sum(money1, money2);

    console.log("costruttore!");
  }

  ngOnInit(): void {
    console.log("init!")
  }

  sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  showHidden(): void {
    this.show = !this.show;
  }

  printElement(): void {
    console.log(this.aboutElement.nativeElement);
  }

  hello(field: HTMLSelectElement) {
    if (field.value == "1") {
      this.size = "big";
    } else if (field.value == "2") {
      this.size = "small";
    } else {
      this.size = "none";
    }
  }

}
