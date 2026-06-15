/**
 * Необходимо написать функцию, которая разделит каждую строку
 * в массиве `words` по строке `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */
export const splitWordsBySeparator = (words, separator) => {
    let arr = [];

    for (let i=0; i<words.length; i++) {
        let subarr = words[i].split(separator);

        for (let j=0; j<subarr.length; j++) {
            if (subarr[j] !== "") {
                arr.push(subarr[j]);
            }
        }
    }
    return arr;
};