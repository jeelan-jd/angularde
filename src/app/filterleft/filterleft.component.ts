import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import {
  TimelineViewsService, TimelineMonthService, AgendaService, EventSettingsModel, GroupModel, ResizeService, RenderCellEventArgs,  
} from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData, resourceData } from '../../data' 

@Component({
  selector: 'app-filterleft',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './filterleft.component.html',
  styleUrls: ['./filterleft.component.scss'],
  providers: [TimelineViewsService, TimelineMonthService, AgendaService, ResizeService],
})
export class FilterleftComponent  implements OnInit {
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // Access the DOM element by ID and set the innerHTML
    const element = this.elementRef.nativeElement.querySelector('.e-toolbar-items');
    element.innerHTML = '<p>Custom HTML Content</p>';
  }

  public selectedDate: Date = new Date(2023, 0, 4);
    public workDays: number[] = [0, 1, 2, 3, 4, 5];
    public group: GroupModel = {
      resources: ['Projects', 'Categories']
    };
    public projectDataSource: Record<string, any>[] = [
      { loc: 'Los Angeles', id: 1, color: '#cb6bb2' },
      { loc: 'San Diego', id: 2, color: '#56ca85' }
    ];
    public categoryDataSource: Record<string, any>[] = [
      { text: 'Alex Anderson', id: 1, groupId: 1, color: 'rgb(160, 210, 251)', },
      { text: 'John Doe', id: 2, groupId: 1, color: 'rgb(255, 200, 117)' },
      { text: 'John Doe', id: 2, groupId: 1, color: '#7fa900' },
      { text: 'John Vincent', id: 3, groupId: 2, color: '#fbe1e8' },
      { text: 'Annie Leonhart', id: 4, groupId: 2, color: '#5978ee' },
      { text: 'Annie Leonhart', id: 5, groupId: 3, color: '#df5286' },
      { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
    ];


  
    public allowMultiple = true;
    public eventSettings: EventSettingsModel = {
      dataSource: extend([], resourceData.concat(timelineResourceData), true) as Record<string, any>[]
    };

}
