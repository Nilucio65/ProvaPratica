import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

    v1: number = 0;
    v2: number = 0;
    resp: number = 0
    str1!: string;
    str2!: string;

    Converter(){
      if(this.str1 == this.str2){
        alert("Selecione moedas diferentes!");
      }
      else if(this.str1 == "R" && this.str2 == "D"){
        this.resp = this.v1 / this.v2;
      }
      else if(this.str1 == "R" && this.str2 == "E"){
        this.resp = this.v1 / this.v2;
      }
      else if(this.str1 == "D" && this.str2 == "R"){
      this.resp = this.v1 * this.v2;
      }
      else if(this.str1 == "D" && this.str2 == "E"){
        this.resp = this.v1 * this.v2;
      }
      else if(this.str1 == "E" && this.str2 == "D"){
        this.resp = this.v1 / this.v2;
      }
      else if(this.str1 == "E" && this.str2 == "R"){
        this.resp = this.v1 * this.v2;
      }
}
}
