/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */
export const addTwoPromises = async function (promise1, promise2) {

  let first = promise1.catch(value => value);
  let second = promise2.catch(value => value);

  return Promise.all([first, second]).then(([a, b]) => a+b);
};
