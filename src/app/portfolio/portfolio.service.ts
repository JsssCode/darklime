import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PortfolioItem } from './../data_backend/portfolio_model';

@Injectable()
export class PortfolioService {
    private portfolioUrl = 'api/portfolio';  // URL to web api

    constructor(private http: Http) { }

    getPortfolioItems() {
        return this.http.get(this.portfolioUrl)
            .toPromise()
            .then(response => response.json().data);
            //.catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    filterbycategory(imgs: any[], category: string): any[] {
        if (category=='all_projects') return imgs;
        return imgs.filter(img => img.category.indexOf(category) !== -1);
    }
}