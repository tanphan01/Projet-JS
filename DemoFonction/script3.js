function palindrome (string) {
    if (string.split('').reverse().join('') === string) {
        console.log("This is a palindrome")
    } else {
        console.log("This is not a palindrome")
    }
}

console.log(palindrome("1561"))