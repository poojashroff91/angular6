import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capital'
})
export class CapitalPipe implements PipeTransform {
    
    transform(value: string) :string{
        if (!value) return null;

        let words = value.split(' ');
        for (let i = 0; i < words.length; i++){
            let word = words[i];
            if(i > 0 && this.isPreposition(word))
                words[i] = word.toLowerCase(); 
            else 
                words[i] = this.toTitleCase(word);
        }
        return words.join(' ');
    }

    isPreposition(word: string) :boolean{
        let prepositions = [
            "of",
            "the"
        ];
        return (prepositions.includes(word.toLowerCase()));
    }

    toTitleCase(word: string) : string{
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }
}