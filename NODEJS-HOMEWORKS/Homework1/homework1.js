
const arguments = process.argv.slice(1);

function areaOfTheCircle(radius){
    const piNumber = 3.14;
   let area = piNumber * radius * radius;
   console.log("yarıçapı " + radius + " olan dairenin alanı: " + area );
}

areaOfTheCircle(5);