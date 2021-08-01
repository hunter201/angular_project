import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {

    transform(counts: any, value: any) {
        
        return counts.filter((count:any) => {
            return count.name.includes(value)
        })
    }
}