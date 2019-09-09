import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDdArea = true;

  onFileComplete(data: any) {
    console.log(data);
  }

  onShowDdAreaChange(){
    console.log(this.showDdArea);
  }
}
