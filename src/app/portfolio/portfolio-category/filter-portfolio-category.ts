import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterimgsbycategory'
})
@Injectable()
export class FilterImgsByCategoryPipe implements PipeTransform {
    transform(imgs: any[], category: string): any[] {
        if (category=='all_projects') return imgs;
        return imgs.filter(img => img.category.indexOf(category) !== -1);
    }
}