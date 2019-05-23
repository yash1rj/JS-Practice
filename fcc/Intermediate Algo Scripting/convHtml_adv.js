function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

// test here
convertHTML("Dolce & Gabbana");

/*
Create a object to use the Lookup functionality to easily find the characters.
Split the original string by characters and use map to check for the changed html 
entity or use the same one. Alternatively you could use Regex str.replace(/&|<|>|"|'/gi.
The a function is added which is what returns the converted entity or the original 
one if there is no conversion. If you go the regex route then you just have to return the matched hits. return html[entity];
Lastly we join all the characters once again.
*/
