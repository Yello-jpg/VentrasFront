import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.scss']
})
export class BorrarComponent {
  subject = new Subject();
  number1 = 0;
  number2 = 0;
  total1 = 0;
  total2 = 0;

  subs1: any;
  subs2: any;

  public constructor() {
    this.subscribe1();
    this.subscribe2();
  }

  subscribe1(): void{
    this.subs1 = this.subject.subscribe(data => {
      this.total1 = this.number1 + this.number2;
      console.log("\nData\n",data);
    })
  }

  subscribe2(): void{
    this.subs1 = this.subject.subscribe(data => {
      this.total2 = this.number1 * this.number2;
      console.log("\n",data);
    })
  }

  change(): void{
    this.subject.next(null);
  }
}
