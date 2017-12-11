import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/main.component.html',
})
export class mainComponent {
    constructor(private router: Router) { }

    public homePage() {
        this.router.navigateByUrl('/Home');
    }
}
