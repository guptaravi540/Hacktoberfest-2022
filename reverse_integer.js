// question link -https://leetcode.com/problems/reverse-integer/submissions/

var reverse = function(x) {
    let neg = false;
    if(x < 0)
    {
        neg = true;
        x = x * -1;
    }
    
    var num = parseInt(x.toString().split('').reverse().join(''));
    if(neg)
        num = num * -1;
    if( num > Math.pow(2, 31) - 1 || num < Math.pow(2, 31) * -1)
        num = 0;

    return num;

};