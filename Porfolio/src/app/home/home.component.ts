import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showPopup(title: string, description: string): void {
    // Add your custom JavaScript or jQuery code here to show the popup
    alert(`Title: ${title}\nDescription: ${description}`);
  }

  
}
