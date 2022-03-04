function writeCards(array, event) {
    let cards = []
    for(let i = 0; i < array.length; i++){
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

function countDown(number) {
    while(number > -1){
        console.log(number--)
    }
}