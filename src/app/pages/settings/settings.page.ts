import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { IonToggle } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
  
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  deVuelta(){
    this.router.navigate(['/home']);
  }


}
