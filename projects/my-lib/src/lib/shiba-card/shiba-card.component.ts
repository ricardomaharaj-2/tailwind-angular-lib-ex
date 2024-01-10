import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'lib-shiba-card',
  templateUrl: './shiba-card.component.html',
  imports: [MatButtonModule, MatCardModule],
})
export class ShibaCardComponent {}
