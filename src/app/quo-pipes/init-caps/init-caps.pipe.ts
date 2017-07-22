import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initCaps'
})
export class InitCapsPipe implements PipeTransform {

  private static capitalizeFirstCharacter(value) {
    const capitalize_first_character = value.charAt(0).toLocaleUpperCase();
    const following_characters = value.substring(1);

    return capitalize_first_character + following_characters;
  }

  private static titleCaseEachWord(word_list) {
    return word_list.reduce(
      (previousValue, currentValue, currentIndex) => {
        /**
         * NOTE: Array reducers always start from index 1 and take the 0th value as previous value.
         * */
        if (currentIndex === 1) {
          previousValue = InitCapsPipe.capitalizeFirstCharacter(previousValue);
        }

        currentValue = InitCapsPipe.capitalizeFirstCharacter(currentValue);

        return `${previousValue} ${currentValue}`;
      }
    );
  }

  transform(value: any, args?: any): any {
    /**
     * Extract a list of words
     * */
    const word_list = value.split(/\s/);

    return word_list.length > 1 ? InitCapsPipe.titleCaseEachWord(word_list) : InitCapsPipe.capitalizeFirstCharacter(word_list[0]);
  }

}
