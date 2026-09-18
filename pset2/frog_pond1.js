let numberOfFrogs = prompt("how many frogs are trying to jump in?");
const maxFrogCapacity = numberOfFrogs > 15;
let messageToPrint = maxFrogCapacity ? "It's too crowded!" : "Come on in!";
print(messageToPrint);