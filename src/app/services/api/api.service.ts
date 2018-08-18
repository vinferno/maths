import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {
  }

  public getGroups() {
    return this.http.get('http://localhost:3000/get-groups');
  }
  public getGroupItems(group) {
    return this.http.post('http://localhost:3000/get-group-item', {group: group});
  }
  public getItemConfig(payload) {
    return this.http.post('http://localhost:3000/get-item-config', payload);
  }
}
