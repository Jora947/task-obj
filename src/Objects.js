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
    function clone(object) {
        let temp = {};
        for (let key in object) {
            if (
                Object.prototype.toString.call(object[key]) ===
                '[object Object]'
            )
                temp[key] = clone(object[key]);
            else temp[key] = object[key];
        }
        return temp;
    }
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push({ ...clone(obj), id: i });
    }
    return result;
}
