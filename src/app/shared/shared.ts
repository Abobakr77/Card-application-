import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: `ChangeToUpper`
})

export class pipes implements PipeTransform{
    transform(value: string) : string{
        return value.toUpperCase();
    }

}