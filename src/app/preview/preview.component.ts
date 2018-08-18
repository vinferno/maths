import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {stateActions} from '../state/reducers-index';
import {Store} from '@ngrx/store';
import {ApiService} from '../services/api/api.service';

@Component({
  selector: 'vf-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewComponent implements OnInit {
  public config;
  constructor(public store: Store<any>, public apiService: ApiService) { }

  ngOnInit() {
    this.store.select('selectedState').subscribe( selectedState => {
      console.log('selectedState', selectedState);
      if (selectedState.type === stateActions.selectedActions.types.SELECTED_UPDATE_ITEM) {
        this.apiService.getItemConfig({item: selectedState.item, group: selectedState.group }).subscribe( config => {
          this.store.dispatch(stateActions.selectedActions.updateConfig(config));
        });
      }

      if (selectedState.type === stateActions.selectedActions.types.SELECTED_UPDATE_CONFIG) {
        this.config = selectedState.config;
      }
    });
  }

  public getStyle(config) {
    if (!config) { return; }

    return config.style;
  }
}

