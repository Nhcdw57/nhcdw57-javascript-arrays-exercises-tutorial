// Your code here


function lyricsGenerator(array){
    let lyricArray = [...array];
    let breakCounter = 0;
    let breakPoints = [];
    for(let index in array){
        if(array[index]===1){
            lyricArray[index] = 'Drop the bass';
            breakCounter += 1;
        }else if(array[index]===0){
            lyricArray[index] = 'Boom'
            breakCounter = 0;
        }

        if(breakCounter === 3){
            breakPoints.push(parseInt(index)+breakPoints.length+1);
            
        }
    }
    for(let breakPoint of breakPoints){
        lyricArray.splice(breakPoint,0,'!!!Break the bass!!!');
    }
    return lyricArray.join(" ");
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
