// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.


function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const clonerFunction = obj[key].bind({});
                functions.push({clonerFunction, key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const fun of functions) {
            cloneObj[fun.key] = fun.clonerFunction;
        }

        console.log(cloneObj);
        return cloneObj

    }

}

cloner({id: 123, name: 'asdsad', greeting() {}, newGreeting() {}});