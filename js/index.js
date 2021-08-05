const phones = [
  {model: "Galaxy M32", manufacturer: "Samsung", price: 6799, color:"Blue", inStock: true},
  {model: "Galaxy M12", manufacturer: "Samsung", price: 4399, color:"Black", inStock: false},
  {model: "iPhone 11", manufacturer: "Apple", price: 19999, color:"Black", inStock: true},
  {model: "Redmi Note 9", manufacturer: "Xiaomi", price: 4999, color:"Grey", inStock: false},
  {model: "Nord N100", manufacturer: "OnePlus", price: 3999, color:"Frost", inStock: false},
  {model: "Mi 1", manufacturer: "Xiaomi", price: 30099, color:"Grey", inStock: true},
  {model: "Galaxy S21", manufacturer: "Samsung", price: 32999, color:"Red", inStock: true},
  {model: "P30 Pro", manufacturer: "Huawei", price: 10750, color:"Pink", inStock: true},
  {model: "Galaxy S21", manufacturer: "Samsung", price: 35999, color:"Blue", inStock: true},
  {model: "iPhone 12 Pro", manufacturer: "Apple", price: 39999, color:"Gold", inStock: false},
  {model: "RAZR", manufacturer: "Motorola", price: 36999, color:"Gold", inStock: true},
  {model: "Galaxy Note 20", manufacturer: "Samsung", price: 35999, color:"White", inStock: true},
  {model: "ROG Phone", manufacturer: "Asus", price: 33999, color:"Blue", inStock: true},
  {model: "Galaxy Z Flip", manufacturer: "Samsung", price: 23999, color:"Grey", inStock: false},
  {model: "P30", manufacturer: "Huawei", price: 8895, color:"Graey", inStock: true},
  {model: "X3 Pro", manufacturer: "Poco", price: 2854, color:"Silver", inStock: true},
  {model: "P Smart", manufacturer: "Huawei", price: 7999, color:"Red", inStock: true},
  {model: "A54", manufacturer: "OPPO", price: 4999, color:"Black", inStock: false},
  {model: "Xperia XZ Dual", manufacturer: "Sony", price: 41799, color:"Gold", inStock: true},
  {model: "M10", manufacturer: "Meizu", price: 6799, color:"Blue", inStock: true},
  {model: "G20", manufacturer: "Nokia", price: 34799, color:"Black", inStock: false}
]

// 1. Посчитать количество моделей телефонов в наличии и вывести в консоль
function getAvaliablePhonesNumber(){
  let amount = 0;

  const forEachCallback = function(phones){
    if(phones.inStock){
      amount++;
    }
  }
  
  phones.forEach(forEachCallback);
  return `${amount} телефонов в наличии`;
}
// 2. Получить массив тех телефонов, которые есть в наличии
const inStock = function(inStock){
  return inStock === true;
}

const callbackStock = function(phones){
  return inStock(phones.inStock);
}

const checkInStock = phones.filter(callbackStock);;

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
function getPhoneData (phones){
  
  const callback = function(phones){
    const phoneStockMessage = phones.inStock ? 'в наличии' : 'нет в наличии';
    console.log(`${phones.manufacturer} ${phones.model} со стоимостью ${phones.price} грн. сейчас ${phoneStockMessage}`);
  }

  phones.forEach(callback);
}

// 2. Отсортировать массив телефонов по цене (от дорогих к дешевым)
const checkPhonesPrice = phones.sort(function(a,b){
  return b.price - a.price;
})
// 3. Создать массивы с строками - именами производителей и массив с возможными цветами телефонов.
// Переделать логику генерируемых телефонов чтобы они получали случайного производителя и цвет из списков