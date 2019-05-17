String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}

titleCase("I'm a little tea pot");

/*
We are modifying the replaceAt function using prototype to facilitate the use of the program.

Split the string by white spaces, and create a variable to track the updated title. 
Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. 
by creating concatenated string composed of the whole word in lowercase with the first character replaced by it’s uppercase.
*/
