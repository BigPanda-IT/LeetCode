/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    if (password.length < 8) 
        return false;
    
    for (let i=0; i<password.length; i++) {

        if (password[i] === password[i+1]) {
            return false;
        }

        let codeOfValue = password.charCodeAt(i);

        if (codeOfValue > 96 && codeOfValue < 123) 
            a++;

        if (codeOfValue > 64 && codeOfValue < 91) 
            b++;

        if (codeOfValue > 47 && codeOfValue < 58) 
            c++;
        
        if (codeOfValue === 64 || codeOfValue === 94 || (codeOfValue > 32 &&    codeOfValue < 39) || (codeOfValue > 39 && codeOfValue < 46 && codeOfValue !== 44)) 
            d++;
    }

    if ((a > 0) && (b > 0) && (c > 0) && (d > 0))
        return true;
    else 
        return false;
};