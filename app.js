// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//asnwer: 
// let num = 0

// if(num > 0) {
//     console.log(`num არის დადებითი`);
// }else if(num < 0) {
//     console.log(`num არის უარყოფითი`);
// }else {
//     console.log(`num უდრის ნოლს`);
// };

//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

//asnwer: 

// let operator = 'devide';

// switch (operator) {
//     case 'plus':
//         console.log('plus');
//         break;
//     case 'minus':
//         console.log('minus');
//         break;
//     case 'multiply':
//         console.log('multiply');
//         break;
//     case 'devide':
//         console.log('devide');
//         break;
//     default:
//         console.log('end');
// };

//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer: 

// let oper = '*';

// if(oper === '+') {
//     console.log('plus');
// }else if(oper === '-') {
//     console.log('minus');
// }else if(oper === '*') {
//     console.log('multiply');
// }else if(oper === '/') {
//     console.log('devide');
// }else {
//     console.log('none');
// }

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer:

const firstName = 'Giorgi';
const lastName = 'Tskhovrebashvili';
const email = 'g.tskhovrebashvili@gmail.com';
const password = 'giorgi123';
const phoneNumber = '+99556646';

if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "" &&
    phoneNumber !==
) {
    console.log("succesful registration");
} else if(phoneNumber === "") {
    console.log('phone number is required');
}else {
    console.log('input is required');
}

