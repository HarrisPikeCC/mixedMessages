//declare constants. Arrays for generating the message
const numbers = [1,2,3,4,5,6,7,8,9,0];
const lowercaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const uppercaseLetters = [];
const symbols = ['!','@','#','$','%','^','&','*','(',')'];
let password = [];
let characters = 22;

//fill uppercase letters from lowercase
for(let i=0; i<lowercaseLetters.length; i++){
    uppercaseLetters.push(lowercaseLetters[i].toUpperCase())
};

const generatePassword = (pLength) => {
    //clear password from previous use
    password = [];
    //check pLength meets requirements
    if(pLength < 4 || pLength >99){
        console.log("Length must be between 4 and 99");
        return "Length must be between 4 and 99";
    } else {
        let i=0
        while(i<pLength){
            let typePicker = Math.floor(Math.random()*4);
            switch(typePicker){
                case 0:
                    password.push(numbers[Math.floor(Math.random()*numbers.length)]);
                    i++;
                    break;
                case 1:
                    password.push(lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)]);
                    i++;
                    break;
                case 2:
                    password.push(uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)]);
                    i++;
                    break;
                case 3:
                    password.push(symbols[Math.floor(Math.random()*symbols.length)]);
                    i++;
                    break;
                default:
                console.log("You made a mistake in your program bud. The type picker picked :" + typePicker);
                i++;
            }
        };
        return password.join('');
   }
};

var elPassword = document.getElementById('password');
elPassword.textContent = generatePassword(characters);

var elCharacters = document.getElementById('characters');
elCharacters.textContent = characters;


//tests
// console.log(generatePassword(22));
// console.log(generatePassword(4));
// console.log(generatePassword(3));
// console.log(generatePassword(100));
// console.log(generatePassword(99));
