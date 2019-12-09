function balance(s) {
    if (typeof s !== 'string') throw Error('Not string');
    const errorMessage = (bracket) => `Wrong bracket: ${bracket}`;
    const stack = [];
    const map = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    const openingBrackets = Object.keys(map);
    const closingBrackets = Object.values(map);
    
    for (const char of s) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const last = stack.pop();
            if (map[last] !== char) {
                return errorMessage(char)
            }
        }
    }

    if (stack.length) {
        return errorMessage(stack.join(' '))
    } else {
        return 'All is okay';
    }
}

console.log(balance("{}{}1234[[[[[]5")+"\n");