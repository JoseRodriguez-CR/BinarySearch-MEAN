function binarySearch(array, searchElement){

    let min = 0;
    let max = array.length-1;
    let current;
    let currentElement;

        while ( min <= max ){
            current = Math.round(( min + max )/2);
            currentElement = array[ current ];
            if ( currentElement < searchElement ){
                min = current + 1;
            }else if( currentElement > searchElement ){
                max = current-1;
            }else{
                return current;
            }
            
        }
    return -1;  
}
console.log(binarySearch([1, 5, 9, 10, 13, 15, 17, 20, 22 ], 45));
console.log(binarySearch([1, 5, 9, 10, 13, 15, 17, 20, 22 ], 1));
console.log(binarySearch([1, 5, 9, 10, 13, 15, 17, 20, 22 ], 13));