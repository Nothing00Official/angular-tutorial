import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { User } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class TutorialService{

    private user = new Subject<string>();

    userChanged$ = this.user.asObservable();

    constructor(public http: HttpClient){}

    downloadUsers(): Observable<User[]>{
        return this.http.get<User[]>('https://craftuniversity.it/api.php?request=users');
    }

    changeUser(u: string){
        this.user.next(u);
    }

}