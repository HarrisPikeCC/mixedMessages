//declare constants. Arrays for generating the message
const number = [];
const letter = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const symbol = ['!','@','#','$','%','^','&','*','(',')'];

//generate 10 random numbers between 0 and 100
for(let i=0; i<10; i++){
    number.push(Math.floor(Math.random()*100));
};


let message = number[Math.floor((Math.random()*number.length)-1)] + 
                letter[Math.floor((Math.random()*letter.length)-1)] + 
                symbol[Math.floor((Math.random()*symbol.length)-1)];

console.log(message);