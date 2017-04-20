import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SkillItem } from './../data_backend/skill_model';

@Injectable()
export class SkillsService {
    private skillUrl = 'api/skills';  // URL to web api

    constructor(private http: Http) { }

    getSkillItems(): Promise<SkillItem[]> {
        return this.http.get(this.skillUrl)
            .toPromise()
            .then(response => response.json().data as SkillItem[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}