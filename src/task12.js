const a = 5;
const b = 8;
const c = 10;
const perimeter = a + b + c; 
const area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)); /*Формула Герона*/
console.log(area); /*Площадь, найденная по формуле герона*/ 