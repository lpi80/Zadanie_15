function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

const iPhone6S = new Phone("Apple", 2250, "silver");
const onePlusOne = new Phone("One", 500, "gold");
const samsungGalaxyS6 = new Phone("Samsung", 2500, "white");
