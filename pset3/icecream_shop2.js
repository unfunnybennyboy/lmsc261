const conesSoldPerHour = 14;
const inventory = 168;

for(let hour = 1; hour <= 12; hour++){
    print(conesSoldPerHour + " sold at hour " + hour);
    print(inventory - conesSoldPerHour * hour + " items left")

}