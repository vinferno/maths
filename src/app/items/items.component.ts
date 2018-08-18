import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {stateActions} from '../state/reducers-index';
import {ApiService} from '../services/api/api.service';

@Component({
  selector: 'vf-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items;
  constructor(public store: Store<any>, public apiService: ApiService) { }

  ngOnInit() {
    this.store.select('selectedState').subscribe( selectedState => {
      if (selectedState.type === stateActions.selectedActions.types.SELECTED_UPDATE_GROUP) {
        this.apiService.getGroupItems(selectedState.group).subscribe( items => {
          this.store.dispatch(stateActions.optionsActions.updateItems(items));
        });
      }
    });
    this.store.select('optionsState').subscribe( optionsState => {
      if (optionsState.type === stateActions.optionsActions.types.OPTIONS_UPDATE_ITEMS) {
        console.log('options set', optionsState);
        this.items = optionsState.items;
      }
    });
  }

  public setItem(item) {
    this.store.dispatch(stateActions.selectedActions.updateItem(item));
  }

}
