import { fn } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-Project';
  // getName(name:any){
  //   console.log('Function Called')
  // }
  // getFullName(fname:any){
  //   console.warn(fname);
  // }
  count = 0
  counter(type:string){
    if(type == '+'){
      this.count++;
    }
    else{
      this.count--;
    }
  }
}
