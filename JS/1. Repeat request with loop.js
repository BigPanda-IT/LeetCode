/**
 * Функция, которая запрашивает данные с помощью fetcher
 * и повторяет запрос в случае ошибки. Запросы повторяются
 * до тех пор, пока не будет получен успешный ответ
 * или пока не будут исчерпаны все попытки.
 * 
 * @param {function} fetcher - функция, которая возвращает Promise
 * @param {number} count - максимальное количество попыток
 */
export async function fetchWithAutoRetry(fetcher, count) {

    let lasterror;

    for (let i=0; i<=count; i++) {
        try {
            return await fetcher();
        }
        catch(error) {
            lasterror = error;
        }
    }

    throw lasterror;
};