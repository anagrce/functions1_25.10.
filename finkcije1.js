// zadatak 1.
function maxNumber(a,b){
    if(a>b){

        return "A je veci";
    }else{
        return "B je veci";
    }
}
    let result=maxNumber(8,10);
console.log(result);

// zadatak 2.

function oddNumber(a){
    if( a%2==0){
        return "Number is odd";
    }else{
        return "Number is even";
    }
}   
    let c=oddNumber(5);
console.log(c);

// zadatak 3.

function threeDigit(a){
    
    if(a>99 && a<1000){
        return "Number has 3 digits";
    }else{
        return "Errorrr";
    }
}   let broj=threeDigit(345);
    console.log(broj);
    

// zadatak 4.

function aritmetic(a,b,c,d){
    return (a+b+c+d)/4;
}
   
console.log(aritmetic(10,2,3,5));

// zadatak 5.

function squareStar(num) {
    var string = "";
    for (i = 0; i < num; i++){
        for (j = 0; j < num; j++) {
            if(i===0 || i=== num-1){
                string += "*";
            }else{
                if(j ===0 || j === num-1){
                    string += "*";
                }else{
                    string += " ";
                }
            }
            
        }
        string += "\n";
    }
    return string;
}
let num = squareStar(5);
console.log(num);



// zadatak 6.

function valueStars(char, val1,val2, val3){
    if(val1>0 && val2>0 && val3>0){
        return char.repeat(val1)+"\n"+char.repeat(val2)+"\n"+char.repeat(val3);
        }
   else{
        return '';
    }
}console.log(valueStars('*',5,3,7));


//zadatak 7.
function count(n) {
    var count = 0;
    if (n >= 1)
        
     ++count;
    
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }
  console.log(count(111222333));

  //zadatak 8.

  function occurrence(array,element){
    
    let counter=0;
    for(let i=0; i<array.length;i++){
        if(array[i] == element){
            counter++
        }
    }
       return "Numer of occurrence is: " + counter;
  }
  
  console.log(occurrence([2, 4, 7, 8, 7, 7, 1],7));

  //zadatak 9.

  function sumOfOddElements(array){
    sum=0;
    for(let i=0; i<array.length;i++){
        if(array[i]%2 !== 0){
            sum += array[i];
        }
    }
    return "Sum od odd elements of the array is: " +sum;
  }
  console.log(sumOfOddElements([1,2,3,4,5,6,7,8,9]));

  // zadatak 10.

  function appearenceOfLetter(string,letter){
    numberOfAppearence=0;
     
    for(let i=0; i<string.length; i++){
        if(string[i]==letter){
            numberOfAppearence += 1;
        }
    }
    return "Number of appearance is: " + numberOfAppearence;
    }   
    result=appearenceOfLetter('broj pojavljivanJa'.toLowerCase(), 'j');
    console.log(result);

    // zadatak 11.

    function repeatString(str,num){

       if(num >0){
        return str.repeat(num);
       }else{
        return '';
       }
        
    }
        console.log(repeatString('dan', 3));
   