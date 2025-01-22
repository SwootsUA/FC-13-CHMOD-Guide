let userInput = Number(prompt('Enter number (0-7)'));

switch (userInput) {
    case 0:
        console.log('---');
        break;
    case 1:
        console.log('--x');
        break;
    case 2:
        console.log('-w-');
        break;
    case 3:
        console.log('-WX');
        break;
    case 4:
        console.log('r--');
        break;
    case 5:
        console.log('r-x');
        break;
    case 6:
        console.log('RW-');
        break;
    case 7:
        console.log('RWX');
        break;
    default:
        console.log('Incorrect value!');
        break;
}