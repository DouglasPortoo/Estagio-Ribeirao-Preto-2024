let originalString = "Douglas Porto";

function reverseString(string) {
    let characters = string.split('');
    let start = 0;
    let end = characters.length - 1;
    
    while (start < end) {
        [characters[start], characters[end]] = [characters[end], characters[start]];
        start++;
        end--;
    }
    
    return characters.join('');
}

console.log("String original:", originalString);
console.log("String invertida:", reverseString(originalString));