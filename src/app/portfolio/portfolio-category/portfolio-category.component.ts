import { Component, OnInit, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-category',
  templateUrl: './portfolio-category.component.html',
  styleUrls: ['./portfolio-category.component.sass']
})
export class PortfolioCategoryComponent implements OnInit{

  currentcategory: string = 'all_projects';

  constructor() {
   
  }

  ngOnInit() {
  }

  public isLineDark: Array<boolean> = [, false, false, false, false, false];
  public isLineLime: Array<boolean> = [, false, false, false, false, false];

  public ShowFirstLine(category: string) {
    this.currentcategory = category;
    for (var _i = 1; _i < this.isLineLime.length; _i++) {
      this.isLineLime[_i] = false;
    }

    switch (category) {
      case
        'all_projects':
        this.isLineLime[1] = true;
        break;
      case 'catalogs':
        this.isLineLime[2] = true;
        break;
      case 'flyers':
        this.isLineLime[3] = true;
        break;
      case 'infographics':
        this.isLineLime[4] = true;
        break;
      case 'web':
        this.isLineLime[5] = true;
        break;
    }
    for (var _i = 1; _i < this.isLineDark.length; _i++) {
      this.isLineDark[_i] = !this.isLineLime[_i];
    }
   }




}
