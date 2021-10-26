import { Component, Inject, OnInit } from '@angular/core';
import { COMPONENT_PROPS } from '@kirbydesign/designsystem';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent {
  props: any;

  constructor(@Inject(COMPONENT_PROPS) private componentProps) {
    this.props = componentProps;
    console.log(this.props);
  }



}
