function regexVar() {
    /*
       create a regex where the string/word starts with vowel and ends with same vowel also consonent in middle of both of them 
     * Declare a RegExp object variable named 're'
    
    * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    let re =  new RegExp('^([aeiou]).+\\1$');

    return re;
}
