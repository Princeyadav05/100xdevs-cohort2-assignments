/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const getCharacterCode = (char = "a") => {
    return char.charCodeAt(0) - "a".charCodeAt(0);
};

function isAnagram(str1, str2) {
    if (str1.length != str2.length) return false;

    let count = [];

    for (let i = 0; i < str1.length; i++) {
        let letterInS = getCharacterCode(str1[i].toLowerCase());
        let letterInT = getCharacterCode(str2[i].toLowerCase());
        count[letterInS] = (count[letterInS] || 0) + 1;
        count[letterInT] = (count[letterInT] || 0) - 1;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i]) return false;
    }

    return true;
}

module.exports = isAnagram;
