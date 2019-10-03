import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class NinoxService {

  constructor(private http: HttpClient) {
  }

  /*
    get all known Tables known to this databases
  */
  public getTables(opts = null){
    let defaultOpts = {}; // ninox request parameters: page, perPage, order, desc	, new, updated, sinceId	, sinceSq
    if(opts) defaultOpts = opts;
    let url = environment.ninoxAPI+'teams/'+environment.ninoxTeamId+'/databases/'+environment.ninoxDatabaseId+'/tables/';

    let pars = "";
    for (var k in defaultOpts) {
      if (defaultOpts.hasOwnProperty(k)) {
        url += k+'='+defaultOpts[k]+'&';
      }
    }
    if(pars != "") url = url+'?'+pars;

    return this.http.get(url, {
      headers: {
        'Authorization': 'Bearer '+environment.ninoxAPIKey,
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).toPromise()
    .then((ninoxResponse: any) => {
        return ninoxResponse;
    });
  }
  /*
    get Table by TableID
  */
  public getTable(tableId, opts = null){
    let defaultOpts = {}; // ninox request parameters: page, perPage, order, desc	, new, updated, sinceId	, sinceSq
    if(opts) defaultOpts = opts;
    let url = environment.ninoxAPI+'teams/'+environment.ninoxTeamId+'/databases/'+environment.ninoxDatabaseId+'/tables/'+tableId+'';

    let pars = "";
    for (var k in defaultOpts) {
      if (defaultOpts.hasOwnProperty(k)) {
        url += k+'='+defaultOpts[k]+'&';
      }
    }
    if(pars != "") url = url+'?'+pars;

    return this.http.get(url, {
      headers: {
        'Authorization': 'Bearer '+environment.ninoxAPIKey,
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).toPromise()
    .then((ninoxResponse: any) => {
        return ninoxResponse;
    });
  }
  /*
    get the Records of a Table by TableID
  */
  public getTableRecords(tableId, opts = null){
    let defaultOpts = {}; // ninox request parameters: page, perPage, order, desc	, new, updated, sinceId	, sinceSq
    if(opts) defaultOpts = opts;
    let url = environment.ninoxAPI+'teams/'+environment.ninoxTeamId+'/databases/'+environment.ninoxDatabaseId+'/tables/'+tableId+'/records';

    let pars = "";
    for (var k in defaultOpts) {
      if (defaultOpts.hasOwnProperty(k)) {
        url += k+'='+defaultOpts[k]+'&';
      }
    }
    if(pars != "") url = url+'?'+pars;

    return this.http.get(url, {
      headers: {
        'Authorization': 'Bearer '+environment.ninoxAPIKey,
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).toPromise()
    .then((ninoxResponse: any) => {
        return ninoxResponse;
    });
  }
}
