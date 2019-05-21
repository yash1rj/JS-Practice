function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");

/*
isConsonant() is used to check if a character is a consonant.
If first character is vowel, add way to end of string and return it.
If first character is not a vowel:

Split string into array using split().
Push all consonants to end of array with help of shift() and push().
Convert array to string using join() and add ay to end of string. Return it.
*/
