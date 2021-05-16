"use strict";

function getPINs(observed) {

    const passNoted = observed.split('');

    const comboList = [observed];
    const str = passNoted;
    
    const possibleCombo = findPossiblePass(passNoted),
          loopLen = passNoted.length;

    //console.log(possibleCombo);

    if(loopLen > 1){
        for(let i = 0; i < loopLen; i++){
            const item = possibleCombo[i];
            for(let x = 0; x < item.length; x++){
                str[i] = item[x];
                superLooper(i, possibleCombo, str, comboList);
            }
        }
        //console.log(comboList.length);
        return comboList;   
    }
    else{
        return possibleCombo[0];
    }
}


function superLooper(i, possibleCombo, str, comboList){

    const loopLen = possibleCombo.length;

    for(let x = i+1; x < loopLen; x++){

        const item = possibleCombo[x];
        for(let y = 0; y < item.length; y++){
            str[x] = item[y];
            if(x < loopLen - 1){
                superLooper(x, possibleCombo, str, comboList);
            }
            const combo = str.join('')
            if(!comboList.includes(combo)){
                comboList.push(combo);
            }

        }

    }
}


function findPossiblePass(passNoted) {

    const lock = [
        ['1', '2', '3'], 
        ['4', '5', '6'], 
        ['7', '8', '9'],
        [null, '0', null]
        ];

        const grid = lock.length,
              possiblePass = [];


        for(let h = 0; h < passNoted.length; h++){
            const possibilityList = [],
                num = passNoted[h];
            for(let i = 0; i < grid; i++){
                const innerList = lock[i];
                for(let x = 0; x < innerList.length; x++){
                    if(innerList[x] === num){
                        possibilityList.push(num);
                        if(x !== (innerList.length - 1)){
                            //means there is number to the right
                          if(innerList[x+1]){
                              const val = innerList[x+1];
                              possibilityList.push(val); 
                          }
                        }
                        if(x !== 0){
                          //means there is number to the left
                          if(innerList[x-1]){
                              const val = innerList[x-1];
                              possibilityList.push(val);
                          }
                        }
                        if(i !== (grid - 1)){
                          // means there is a number to the bottom
                          if(lock[i+1][x]){
                              const val = lock[i+1][x];
                              possibilityList.push(val); 
                          }
                        }
                        if(i !== 0){
                          // means there is a number to the top
                          if(lock[i-1][x]){
                              const val = lock[i-1][x];
                              possibilityList.push(val); 
                          }
                        }
                    }
                }

            

        }
        possiblePass.push(possibilityList);
    }

    return possiblePass;
}


console.log(getPINs('369'));