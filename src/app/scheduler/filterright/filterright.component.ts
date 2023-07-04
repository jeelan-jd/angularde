import { Component } from '@angular/core';
import { filterData } from '../../../data'

@Component({
  selector: 'app-filterright',
  templateUrl: './filterright.component.html',
  styleUrls: ['./filterright.component.scss']
})
export class FilterrightComponent {
  public filterall = filterData;
}
