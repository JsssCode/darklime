import { Component, Input, OnChanges, SimpleChanges, OnInit, HostListener } from '@angular/core';
import { PortfolioItem } from './../data_backend/portfolio_model';
import { PortfolioService } from './portfolio.service';

import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.sass']
})


export class PortfolioComponent implements OnChanges, OnInit {
    already_init = false;
    current_project: PortfolioItem;
    portfolio_rows: number = 2;
    portfolio_colomns: number;
    projects: PortfolioItem[];
    projects_view: PortfolioItem[];

    @Input()
    category: string;

    constructor(
        private portfolioService: PortfolioService) {

    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.countPortfolioColomns(event.target.innerWidth)
    }

    ngOnInit() {
        this.getPortfolio().then(portfolio => { this.projects = portfolio; this.filterPortfolio(); this.reducePortfolio(); });

        this.already_init = true;
        this.countPortfolioColomns(window.screen.width);

    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.already_init === true) {
            this.getPortfolio().then(portfolio => { this.projects = portfolio; this.filterPortfolio(); this.reducePortfolio(); });
        }

    }

    countPortfolioColomns(screen_width) {
        if (screen_width > 992) {
            this.portfolio_colomns = 4
        }
        else if (screen_width > 768) {
            this.portfolio_colomns = 2
        } else {
            this.portfolio_colomns = 1
        };

    }

    ChangeCurrentProject(proj) {
        this.current_project = proj;
        console.log(this.current_project);
    }

    getPortfolio() {
        return this.portfolioService
            .getPortfolioItems().then(projects => this.projects = projects);

    }

    viewMore() {
        this.portfolio_rows++;
        this.reducePortfolio();
    }

    filterPortfolio() {
        this.projects = this.portfolioService.filterbycategory(this.projects, this.category);
    }

    reducePortfolio() {
        this.projects_view = this.projects.slice(0, this.portfolio_rows * this.portfolio_colomns);
    }
}
