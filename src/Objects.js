/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    }
    if (data.gender === 'male') {
        if (data.hasOwnProperty('income') === false) {
            data.income = 100000;
        }
    }
    return data;
}

/*
В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let total_obj = Object.assign({}, obj1, obj2, obj3);
    let array = [];
    for (const i in total_obj) {
        array.push(i);
    }
    return array.sort();
}

/*
Верните в результате работы функции массив с клонами объекта obj.
При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
Количество клонов - count.
*/
export function objectClone(obj, count) {
    let arr = [];
    for (var i = 0; i < count; i++) {
        let obj1 = obj.constructor();
        Object.assign(obj1, obj);
        obj1.id = i;
        arr.push(obj1);
    }
    return arr;
}
