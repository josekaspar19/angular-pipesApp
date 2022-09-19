import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {

    transform( valor: number ):string {
    
        switch ( valor ) {
        case 0: 
        return 'azul';
        
        case 1: 
        return 'negro';
        
        case 2: 
        return 'rojo';
        
        case 3: 
        return 'verde';
        
        default:
        return 'color no definidio';
    }
    }

}