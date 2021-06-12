import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

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

  selectField: FormControl = new FormControl("1");

  form: FormGroup;

  constructor(private title: Title, private meta: Meta, public fb: FormBuilder) {
    this.today = new Date();

    let money1 = 2345345433;
    let money2 = 343453545;

    this.money = this.sum(money1, money2);

    console.log("costruttore!");

    this.form = fb.group({
      'user': ['ciao', Validators.required],
      'email': ['', Validators.required],
      'date': ['']
    });
    this.title.setTitle("Homepage Tutorial");
    this.meta.updateTag({ name: 'description', content: "questa è una homepage" });
    this.meta.updateTag({ name: 'keywords', content: "tutorial, homepage, sito in angularm metadata" });
    this.meta.updateTag({ charset: "utf-8" });
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

  hello() {
    if (this.selectField.value == "1") {
      this.size = "big";
    } else if (this.selectField.value == "2") {
      this.size = "small";
    } else {
      this.size = "none";
    }
  }

  checkUser() {
    let user = this.form.controls['user'].value;
    if (!(user.length >= 8)) {
      this.form.controls['user'].setErrors({ incorect: true });
    } else {
      this.form.controls['user'].setErrors(null);
    }
  }


  send(): void {
    if (!this.form.valid) {
      alert("compilare tutti i campi obbligatori!");
      return;
    }
    console.log(
      this.form.controls['user'].value,
      this.form.controls['email'].value,
      this.form.controls['date'].value,
    );
  }
}
