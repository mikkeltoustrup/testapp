import { Component } from '@angular/core';
import { Modal, ModalConfig, ModalController } from '@kirbydesign/designsystem';
import { TesterComponent } from './tester/tester.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testapp';

  constructor(private modalController: ModalController){

  }

  testMethod() {
    const config: ModalConfig = {
      flavor: 'modal',
      component: TesterComponent,
      componentProps: {
        prop1: 'test',
        prop2: 'value'
      }
    };
    this.modalController.showModal(config);
    console.log('clicked');
  }
}


