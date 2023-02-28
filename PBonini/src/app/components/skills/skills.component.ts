import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

}
import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-progressbar-showvalue',
	standalone: true,
	imports: [NgbProgressbarModule],
	templateUrl: './progressbar-showvalue.html',
})
export class NgbdProgressbarShowvalue {}
