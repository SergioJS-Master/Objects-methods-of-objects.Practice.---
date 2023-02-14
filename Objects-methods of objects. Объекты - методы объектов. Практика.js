console.log('================Объекты. Методы объектов===============');

//копирование свойств объекта 

const button = {
  width: 100,
  height: 150,
  color: 'black'
}

const newButton = {
  ...button, // (...) оператор разделения объекта на свойства.
  color: 'red',
} //если у объекта button есть схожее свойство, например color:, то в случае, если мы укажем ...button в самом
//конце, то в новой копии объекта свойство сolor  перезапишется с red на black

console.table(button)
console.table(newButton);

//v.2

const button1 = {
  width: 100,
  height: 150,
  color: 'black'
}
const newButton1 = {
  bacgrounColor: 'blue',
  margin: '5px'
}

const newButtonOne = {
  ...button1, //оператор(...) создает новый объект, и изменения в переменно newButtonOne, не повлияют на переменные 
  ...newButton1, // выше. Соответственно никаких мутаций не произойдет, за исключением вложенных свойств
}

console.table(newButtonOne);


console.log('____________Cоздание копии объекта и изменение возраста в копии___________');

//создание копии объекта и изменение возраста в копии

const newName = {
    name: 'sergey',
    age: 25,
    server() {
        console.log('Hi');
    },
    lastName: 'Krapchin'
} 

function a (obj) { 
    const copyObgNewOne = Object.assign({}, obj); //создание копии объекта
    copyObgNewOne.age += 1;
    return copyObgNewOne
}
const newCopyObgNewOne = a(newName);

console.log(newName.age);
console.log(newCopyObgNewOne.age);

console.log('____________создание объекта и интеграция методов, дополнительных свойсв в тело объекта. ___________');

//создание объекта и интеграция методов, дополнительных свойсв в тело объекта. 
//Также, применение различных флагов и методов Object.getOwnPropertyDescriptors и т.д.

const newOne = {
    name: 'Sergey',
    age: 25,
    server() {
        console.log('Hi');
    },
    lastName: 'Krapchin'
} 

let midlName = 'midlName';
newOne[midlName] = 'Michailivich';//обращение к свойству объекта в квадратных сквобках происходит, если мы обращаемся 
                                  // к свойству состоящего из 2 и более слов и если мы обращаемся к переменной

 let disckription = Object.getOwnPropertyDescriptors(newOne);
 console.log(disckription);

Object.defineProperty(newOne, 'name', {
    writable: false
})

newOne.name = 'Susanin';

console.log(newOne);

let disckriptionTwo = Object.getOwnPropertyDescriptors(newOne.name)
console.log(disckriptionTwo);

//•writable — дескриптор, который задает право на изменение свойства. В противном случае доступно только чтение. Дефолтное значение — true,
//•enumerable — дескриптор, который разрешает свойству итерироваться в цикле. Дефолтное значение — true,
//•configurable — дескриптор, который разрешает удалять свойства и изменять флаги. Дефолтное значение — true.

console.log('____________Mетоды this и new___________');

// методы this и new. 

function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.famil = ' '; 
} 

let user1 = new User('Maria')
console.log(user1)

let user2 = new User('Sergey')
console.log(user2);

console.log('____________Задание №1___________');

/*В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. 
Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения.
 Результат выведите в консоль.

Пример значений переменных:

goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
}
Пример результата:

["title, "price", "good_id", "Самокат", 6000, 1]*/

const goods = {
  title: "Самокат", 
  price: 6000,
  good_id: 1
}

let key = Object.keys(goods)
let vaL = Object.values(goods)
let conCat = key.concat(vaL)
console.log(conCat);

// v.2

let arr = [...Object.keys(goods), ...Object.values(goods)];
console.log(arr);

console.log('____________Задание №2___________');


/*В программе заданы две переменные article и author, которые содержат объекты. 
Объект article содержит информацию о статье, а author — об авторе. 
Сформируйте новый объект, который содержит свойства объектов article и author. 
Результат выведите в консоль.

Пример значений переменных:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
author = {
    name: "Ричард М.В.",
    age: 43
}

Пример результата:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
    name: "Ричард М.В.",
    age: 43
}*/ 

const article = {
  title: "Загадки дачного огурца", 
  text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
const author = {
  name: "Ричард М.В.",
  age: 43
}

let newObj = Object.assign(article, author);
console.log(newObj);

console.log('____________Задание №3___________');


/*В программе заданы две переменные article и author, которые содержат объекты. 
Объект article содержит информацию о статье, а author — об авторе. 
Сформируйте новый объект, который содержит свойства объектов article и author. 
Результат выведите в консоль.

Пример значений переменных:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
author = {
    name: "Ричард М.В.",
    age: 43
}

Пример результата:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
    name: "Ричард М.В.",
    age: 43
}*/ 

const article_1 = {
  title: "Загадки дачного огурца", 
  text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
const author_1 = {
  name: "Ричард М.В.",
  age: 43
}

let newObj_1 = Object.assign(article_1, author_1);
console.log(newObj_1);

console.log('____________Задание №4___________');

/*В программе задан массив array. 
Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.

Пример значений переменных:

array = [true, 4, "word", "10n"]
Пример результата:

Количество элементов в массиве: 4*/

let arraY_5 = [true, 4, "word", "10n"]

function count (a) {
    return (`Количество элементов в массиве: ${a.length}`)    
}
console.log(count(arraY_5));

console.log('____________Задание №5___________');

/*В программе задан двумерный массив employee. 
Удалите у данного массива значение, у которого первый элемент hireDate, 
и добавьте новое значение ["jobName", "IT PROG"] в конец массива. 
Результат выведите в консоль.


Пример значений переменных:

employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]
Пример результата:

[
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["jobName", "IT PROG"]
]*/

let employee  =  [
  ["firstName", "Ivan"], 
  ["lastName", "Ivanov"],
  ["hireDate", "21.10.2015"]
]

let arr_1 = new Map(employee);
arr_1.delete('hireDate');
arr_1.set("jobName", "IT PROG");
let arrNew = Array.from(arr_1); 
console.log(arrNew);

console.log('____________Задание №6___________');

/*В программе задан двумерный массив array. 
Создайте и вызовите функцию countString(), которая считает количество значений массива array, 
у которых второй элемент является строкой. 
Функция countString() должна выводить в консоль сообщение, как в примере.

Пример значений переменных:

array = [
        [ "boolean", true ], 
        [ "number", 4 ],
        [ "string", "word" ],
        [ "object", {}]
    ]
Пример результата:

Количество строковых элементов в именованном массиве: 1*/



const array_3 = [
  [ "boolean", true ], 
  [ "number", 4 ],
  [ "string", "string" ],
  [ "object", {}]
];

function countString() {
  let j = 0
  for (let i = 0; i < array_3.length; i++) {
      if (array_3[i][0] === 'string') {
       j++   
      }
  }   
  console.log(`Количество строковых элементов в именованном массиве: ${j}`);
}
countString(array_3)