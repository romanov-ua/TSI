function sumArray(array){
    sum=0;
    array.forEach(element => sum+=element);
    return sum;
}
function getAboveZero(array){
    let AboveZero = array.filter(function(number){
        return number>0;
    })
    return AboveZero;
}
function getPonies(array, check){
  let t =false;
  array.forEach((i) => {
    if (i == check) {
     t = true;
    } 
  })
    return t;
}
function isTxIncluded(bk,tx){
  let t =false;
  bk.forEach((i) => {
    if (i == tx) {
     t = true;
    } 
  })
    return t;
}

function getSizes(array){

  let l = array.map(function(i){
    return i.length
  })
    return l;
}

function getWithSpaces(array){

  let str = array.join(" ");
  return [str, array.join("").length];
}

function getEpisodes(anime){

  return ("Аниме "+ anime.title +" включает " + anime.episodes +" серий")
}
const triple = (n) => {
    return n*3
}
const getAvgGlucose = (array) => {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum/array.length;
}
console.log("1. "+sumArray([4,6, 16, 73, 5]));
console.log("2. "+getAboveZero([1,-3, -2, 4, 10]));
console.log("3. "+getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'],'Spike'));
console.log(getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'],'AppleJack'));

console.log("4. "+isTxIncluded(["0xaea0","0x8f80", "0xf3ad", "0x17ec"],"0x9e0a"));
console.log("5. "+getSizes(["Moscow",
"Coding", "School"]));

console.log("6. "+getWithSpaces(["Moscow", "never","sleep"]));

console.log("8. "+getEpisodes({title:"Code Geass", episodes: 25}));
console.log("9. "+triple(2));
console.log("10. "+getAvgGlucose([5.4, 8.1, 6.3, 4.9]));