const input = require('sync-input');

const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const printRates = () => {
    console.log("Welcome to Currency Converter!");
    for (const argumentsKey in currencies) {
        console.log(`1 USD equals ${currencies[argumentsKey]} ${argumentsKey}`)
    }
 
}

const printMenu = () =>{
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program")
}

const converter = () => {
    
    while (true) {
        console.log("What do you want to convert?")
        const from = input("From:").toUpperCase();

        if(!(from in currencies)){
            console.log("Unknown currency");
        } else {
            const toCurrency = input("To:").toUpperCase();

            if (!(toCurrency in currencies)){
                console.log("Unknown currency");
            } else {
                const amount = Number(input("Amount:"));
                if (amount < 1) {
                    console.log(`The amount cannot be less than 1`);
                } else if (Number.isNaN(amount)){
                    console.log(`The amount has to be a number`);
                } else{
                    const result = ((amount / currencies[from]) * currencies[toCurrency]).toFixed(4);
                    console.log(`Result: ${amount} ${from} equals ${result} ${toCurrency}`);
                    break;
                }

            }
        }
    }
    
}

printRates();

while (true) {
    printMenu();
    const option = Number(input());
    if (option === 1) {

        converter ();
        break;

    } else if (option === 2) {
        console.log("Have a nice day!");
        break;
    } else {
        console.log("Unknown input");

    }
}














