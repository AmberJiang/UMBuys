  /**
   * Date: 8/22/2020
   * Description: App component class
   * Author: Auto Generated
  */
import { Component } from '@angular/core';

// purpose: to get router's current link;
// I created here is used for test. for example: error page test
// this Router is used in constructor
// TODO: this line can be deleted after test complete.
// Yiwei Yao
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // used to store current path;
  //TODO: This line of code could be deleted when test is finished
  // Yiwei Yao
  public current_path: string = "";

  // I create a constructer is used to passed in Router which used for test by getting
  // router's current url
  //TODO: This line of code could be deleted when test is finished
  // Yiwei Yao
  constructor(private router: Router) {}

  // I create a ngOnInit is used to get current url and used for test router
  // in ngOnInit it gets router's current url and assign to current_Path
  //TODO: This line of code could be deleted when test is finished
  // Yiwei Yao
  ngOnInit() {
    this.current_path = this.router.url;
  }
}
