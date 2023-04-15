const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']


function extractValue(arr, key) {

    return arr.reduce(function(accum, nextValue){
       accum.push(nextValue[key]);
       return accum;
    },[])
}






vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

function vowelCount(str) {
    let vowels = 'aeiou';
   
    return str.split('').reduce(function(accum, nextValue){
        let lowerCased = nextValue.toLowerCase();

        if (vowels.indexOf(lowerCased) !== -1) {
            if (accum[lowerCased]) {
                accum[lowerCased]++;
            }
            else {
                accum[lowerCased] = 1;
            }
        }
        return accum;
    }, {})
}











const arrOfObj = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

addKeyAndValue(arrOfObj, 'title', 'Instructor') //

/*[
  {title: 'Instructor', name: 'Elie'},
  {title: 'Instructor', name: 'Tim'},
  {title: 'Instructor', name: 'Matt'},
  {title: 'Instructor', name: 'Colt'}
]*/


function addKeyAndValue(arrOfObj, key, value) {
   return arrOfObj.reduce(function(accum, nextValue, index){

        accum[index][key] = value;

        return accum;
    }, arrOfObj)
}









/*
function isEven(val){
    return val % 2 === 0;
  }
  
  const arr = [1,2,3,4,5,6,7,8];
  
  partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
  
  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  
  const names = ['Elie', 'Colt', 'Tim', 'Matt'];
  
  partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]*/



  function partition(arr, callback){

    return arr.reduce(function(accum, nextValue){

        if (callback(nextValue)) {
            accum[0].push(nextValue);
        }
            else {
                accum[1].push(nextValue);
            }

            return accum;
        
    }, [[], []]);
  }