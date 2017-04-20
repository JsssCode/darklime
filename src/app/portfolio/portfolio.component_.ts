import { Component, HostListener, HostBinding, Directive, AfterViewInit , ContentChildren, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})



//!!! change all
export class PortfolioComponent_ implements AfterViewInit  {
    openModalWindow:boolean = false;
    imagePointer:number;
    images = [
        {thumb: './app/images/gallery/thumbs/img1.jpg', img: './app/images/gallery/img1.jpg', description: 'Image 1'},
        {thumb: './app/images/gallery/thumbs/img2.jpg', img: './app/images/gallery/img2.jpg', description: 'Image 2'},
        {thumb: './app/images/gallery/thumbs/img3.jpg', img: './app/images/gallery/img3.jpg', description: 'Image 3'},
        {thumb: './app/images/gallery/thumbs/img4.jpg', img: './app/images/gallery/img4.jpg', description: 'Image 4',
            category: 'category1'},
        {thumb: './app/images/gallery/thumbs/p26.jpg', img: './app/images/gallery/img5.jpg', description: 'Image 5',
            category: 'category1'},
        {thumb: './app/images/gallery/thumbs/p26.jpg', img: './app/images/gallery/img5.jpg', description: 'Image 6',
            category: 'category2'},
        {thumb: './app/images/gallery/thumbs/p26.jpg', img: './app/images/gallery/img5.jpg', description: 'Image 7',
            category: 'category2'},
        {thumb: './app/images/gallery/thumbs/p26.jpg', img: './app/images/gallery/img5.jpg', description: 'Image 8',
            category: 'category2'}
    ];



    constructor() {
        this.setHeight();
    }
    @ViewChildren('myList') items: QueryList<ElementRef>;

    ngAfterViewInit (){

    }

    @HostBinding('style.backgroundColor')
    cr:string;

    @HostListener('window:resize', ['$event'])
    setHeight() {
        this.cr = 'red';
    }

    OpenImageModel(imageSrc, images) {
        //alert('OpenImages');
        var imageModalPointer;
        for (var i = 0; i < images.length; i++) {
            if (imageSrc === images[i].img) {
                imageModalPointer = i;
                console.log('jhhl', i);
                break;
            }
        }
        this.openModalWindow = true;
        this.images = images;
        this.imagePointer = imageModalPointer;
    }

    cancelImageModel() {
        this.openModalWindow = false;
    }

    HideCategory(){
        console.log(this.items);
    }
}
