const customer1 = {
    name: 'Alisha',
    age: 25,
    veteran: true,
}

const customer2 = {
    name: 'Gerard',
    age: 72,
    veteran: true,
}

const customer3 = {
    name: 'Nyla',
    age: 12,
    veteran: false,
}

const customer4 = {
    name: 'Tyler',
    age: 27,
    veteran: false,
}

const customer5 = {
    name: 'Poppy',
    age: 68,
    veteran: false,
}

function getTicketPrice(customer) {
    let ticketPrice;
    
    if (customer.age >= 65) {
        ticketPrice = 12.50
    }
    else if (customer.age < 12) {
        ticketPrice = 10.50
    }
    else {
        ticketPrice = 14
    }

    if (customer.veteran === true) {
        ticketPrice = ticketPrice * 0.5;
    }

    return ticketPrice;
}

console.log(getTicketPrice(customer1));
console.log(getTicketPrice(customer2));
console.log(getTicketPrice(customer3));
console.log(getTicketPrice(customer4));
console.log(getTicketPrice(customer5));