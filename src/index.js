module.exports = function toReadable (number) {
    var arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    var arr2 = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str='';
    if (number<21){
        str=arr[number];
        return str;
    }
    if (number>20 && number<100){
        if(number%10 ===0) return arr2[Math.trunc(number/10)-1].toString();
        str=arr2[Math.trunc(number/10)-1]+' '+arr[number%10];
        return str;
    }
    if (number>99){
        if(Math.trunc(number/100) ===0 && Math.trunc(number/10) ===0) {
            str=arr[Math.trunc(number/100)]+' '+'hundred '+arr2[Math.trunc(number/10)];
            return str;
        }
        if(number%100 <20 && number%100 >9) {
            str=arr[Math.trunc(number/100)]+' '+'hundred '+arr[number%100];
            return str;
        }
        if(number%100 ===0) {
            str=arr[Math.trunc(number/100)]+' '+'hundred';
            return str;
        }
        if (Math.trunc(number/10)-Math.trunc(number/100)*10===0){
            str=arr[Math.trunc(number/100)]+' '+'hundred '+arr[number%10];
            return str;
        }
        if (number%10===0){
            str=arr[Math.trunc(number/100)]+' '+'hundred '+arr2[Math.trunc(number/10)-1-Math.trunc(number/100)*10];
        return str;
        }
        str=arr[Math.trunc(number/100)]+' '+'hundred '+arr2[Math.trunc(number/10)-1-Math.trunc(number/100)*10]+' '+arr[number%10];
        return str;
    }
}
