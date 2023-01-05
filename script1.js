

/**
 * Exercices 1
 */
 console.log("---------------Exercices 1 -------------");

// 1- Créez une variable appelée sentence. La valeur de la variable doit être une chaîne contenant les mots « not » et « bad ».
let sentence = "The movie is not that bad , I like it ";
console.log(sentence);


// 2- Créez une variable appelée wordNotoù sa valeur est la première apparition (c'est-à-dire la position) de la sous-chaîne "not" (de la sentencevariable).
let wordNot =  sentence.indexOf("not");
console.log(wordNot);

// 3- Créez une variable appelée wordBadoù sa valeur est la première apparition (c'est-à-dire la position) de la sous-chaîne "bad" (de la sentencevariable).
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

// 4- i le mot "bad" vient après le mot "not", vous devez remplacer toute la sous-chaîne "not…bad" par "good", puis console.log le résultat.
if( wordNot < wordBad){
    let replaceSubString = sentence.replace("not that bad", "good")
    console.log(replaceSubString);
}

// 5- Si le mot "bad" ne vient pas après "not" ou si les mots ne sont pas dans la phrase, console.log la phrase originale.
if( wordNot > wordBad || wordNot == -1 || wordBad == -1){
    console.log(sentence);
    console.log("---------");
}


