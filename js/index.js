const phones = [
  {model: "Samsung Galaxy M32", manufacturer: "China", price: 6799, color:"Blue", inStock: true},
  {model: "Samsung Galaxy M12", manufacturer: "China", price: 4399, color:"Black", inStock: false},
  {model: "Apple iPhone 11", manufacturer: "USA", price: 19999, color:"Black", inStock: true},
  {model: "Xiaomi Redmi Note 9", manufacturer: "China", price: 4999, color:"Grey", inStock: false},
  {model: "OnePlus Nord N100", manufacturer: "China", price: 3999, color:"Frost", inStock: false},
  {model: "Xiaomi Mi 1", manufacturer: "China", price: 30099, color:"Grey", inStock: true},
  {model: "Samsung Galaxy S21", manufacturer: "China", price: 32999, color:"Red", inStock: true},
  {model: "Huawei P30 Pro", manufacturer: "China", price: 10750, color:"Pink", inStock: true},
  {model: "Samsung Galaxy S21", manufacturer: "China", price: 35999, color:"Blue", inStock: true},
  {model: "Apple iPhone 12 Pro", manufacturer: "USA", price: 39999, color:"Gold", inStock: false},
  {model: "Motorola RAZR", manufacturer: "USA", price: 36999, color:"Gold", inStock: true},
  {model: "Samsung Galaxy Note 20", manufacturer: "China", price: 35999, color:"White", inStock: true},
  {model: "Asus ROG Phone", manufacturer: "China", price: 33999, color:"Blue", inStock: true},
  {model: "Samsung Galaxy Z Flip", manufacturer: "China", price: 23999, color:"Grey", inStock: false},
  {model: "Huawei P30", manufacturer: "China", price: 8895, color:"Graey", inStock: true},
  {model: "Poco X3 Pro", manufacturer: "China", price: 2854, color:"Silver", inStock: true},
  {model: "Huawei P Smart", manufacturer: "China", price: 7999, color:"Red", inStock: true},
  {model: "OPPO A54", manufacturer: "China", price: 4999, color:"Black", inStock: false},
  {model: "Xperia XZ Dual", manufacturer: "China", price: 41799, color:"Gold", inStock: true},
  {model: "Meizu M10", manufacturer: "China", price: 6799, color:"Blue", inStock: true},
  {model: "Nokia G20", manufacturer: "China", price: 34799, color:"Black", inStock: false}
]

// 1. Посчитать количество моделей телефонов в наличии и вывести в консоль
const inStock = function(inStock){
  return inStock === true;
}

const callbackStock = function(phones){
  return inStock(phones.inStock);
}

console.log(phones.filter(callbackStock));

// 2. Получить массив тех телефонов, которые есть в наличии

const checkInStock = phones.filter(callbackStock);

// 3. Получить массив телефонов для праздничной распродажи. Всем телефонам которые стоят больше 30000 снизить цену на 30%. Работать только с телефонами, которые есть в наличии
const tallage = 70;

const price = function(price){
  return price >= 30000;
}

const callbackPrice = function(phones){
  return price(phones.price);
}

const checkPrice = phones.filter(callbackPrice);

const checkPriceAndStock = checkPrice.filter(function(phones){
  return phones.inStock === true;
})

const holidaySales = checkPriceAndStock.map(function(phones){
  return Math.round(phones.price / 100 * tallage);
});

// Advanced
// 1. Вывести в консоль для каждого элемента массива строку следующего вида:
// '<Производитель> <Модель> со стоимостью <цена> сейчас <в наличии / нет в наличии>'
// for(let i = 0; i < phones.length; i++){
//   phones.toString()
// }

// function inStockPhrase() {
//   if(phones.inStock === true){
//     return "в наличии";
//   }
//   return "нет в наличии";
// }
// 2. Отсортировать массив телефонов по цене (от дорогих к дешевым)

// 3. Создать массивы с строками - именами производителей и массив с возможными цветами телефонов.
// Переделать логику генерируемых телефонов чтобы они получали случайного производителя и цвет из списков