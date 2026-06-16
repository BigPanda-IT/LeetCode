/**
 * Необходимо написать функцию, возвращающую максимальное числовое значение
 * для строк из массива `strs`.
 * При этом, числовое значение для строки определяется следующим образом:
 * - Если строка состоит только из цифр, то числовое значение — это
 *   результат преобразования строки в число
 * - В ином случае числовое значение — это длина строки
 */

export const maximumValue = (words) => {
    let uniqset = [...new Set(words)];
    let maxsize = 0;

    for (let i=0; i<uniqset.length; i++) {
        let checker = true;

        for (let char of uniqset[i]) {
            if (char < '0' || char > '9') {
                checker = false;
                break;
            }
        }

        if (checker) {
            maxsize = Math.max(maxsize, Number(uniqset[i]));
        }
        else {
            maxsize = Math.max(maxsize, uniqset[i].length);
        }
    }

    return maxsize;
};