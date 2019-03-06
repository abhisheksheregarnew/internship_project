import { Component } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intern';
  sentence = '';
  word = ''
  position: any = [];
  matchsentence: any = [{
    index:[],
    line:[]

  }];
  i = 0


  test(form: NgForm) {

    this.sentence = form.value.sentence,
      this.word = form.value.word
    this.position = []
    this.matchsentence = []
    //logic of searching matching
    var s = this.sentence.trim().split("\n")
    
    for (this.i = 0; this.i <= s.length; this.i++) {
      if (s[this.i].includes(this.word)) {

        const match={
          index:this.i+1,
          line:s[this.i]
        }
        this.matchsentence.push(match)
        console.log(this.matchsentence)
      }
     
    }

  }
}
