import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Store} from '@ngrx/store';
import {stateActions} from '../state/reducers-index';

@Component({
  selector: 'vf-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public groups;
  constructor(
    public apiService: ApiService,
    public store: Store<any>
  ) { }

  ngOnInit() {
    this.apiService.getGroups().subscribe( groups => {
      this.store.dispatch(stateActions.optionsActions.updateGroups(groups));
    });
    this.store.select('optionsState').subscribe( options => {
      this.groups = options.groups;
  });
  }

  public setGroup(group) {
    this.store.dispatch(stateActions.selectedActions.updateGroup(group));
  }

}
