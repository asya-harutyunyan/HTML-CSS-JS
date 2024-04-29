"use strict";

//THIS TEST DATA (pasted to textarea)
// underscore_case
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure


/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').textContent="Convert";

document.querySelector('button').addEventListener('click', function(){
    const textAreaValue=document.querySelector('textarea').value;
    const allLines=textAreaValue.split('\n');
    // console.log(textAreaValue);// Just console the value 
    // underscore_case
    // first_name
    // Some_Variable 
    //  calculate_AGE
    // delayed_departure
    // console.log(allLines); // Makes an Array 
    //(5) ['underscore_case', 'first_name', 'Some_Variable ', ' calculate_AGE', 'delayed_departure']

    for (let j=0; j<allLines.length; j++){
        const toLower=allLines[j].toLowerCase().trim();
        // console.log(toLower);// All makes lower case
        // underscore_case
        // first_name
        // some_variable
        // calculate_age
        // delayed_departure
        const splittedWord=toLower.split('_');
        // console.log(splittedWord);
        // Consolum senca linum
        // (2) ['underscore', 'case']
        // (2) ['first', 'name']
        // (2) ['some', 'variable']
        // (2) ['calculate', 'age']
        // (2) ['delayed', 'departure']
        const words=[];

        for (let i=0; i<splittedWord.length; i++){
            if(splittedWord[i]!==splittedWord[0]){
                const camelCase=splittedWord[i].replace(splittedWord[i][0],
                    splittedWord[i][0].toUpperCase());
                //     console.log(camelCase);
                //     Case
                //     Name
                //     Variable
                //     Age
                //    Departure
                    words.push(camelCase);
            } else{
                words.push(splittedWord[i]);
            }
            // console.log(words);
            //(2) ['underscore', 'Case']
        } 
        const str=`${words.join('').padEnd(20)}${"✅".repeat(j+1)}`;
         console.log(str);
    }
});
*/

//Another variant 

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button=document.querySelector('button');
button.textContent='Convert';

button.addEventListener('click', function(){
    const textAreaValue=document.querySelector('textarea').value;
    const allLines=textAreaValue.split('\n');

    for (const[index, value] of allLines.entries()){
        const[first, second]=value.toLowerCase().trim().split('_');
        // console.log(`Index: ${index}, Value: ${value}`);
        const output=`${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${"✅".repeat(index+1)}`);
    }
});