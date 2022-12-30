

let sentence = "The movie is not that bad, I like it ";

console.log(sentence);

let wordNot =  sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if( wordNot < wordBad){
    let replaceSubString = sentence.replace("not that bad", "good")
    console.log(replaceSubString);
} else if( wordNot > wordBad || wordNot == -1 && wordNot == -1){
    console.log(sentence);
}


