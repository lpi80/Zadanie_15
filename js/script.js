function Phone(brand, price, color, system, country) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    
    this.system = system;
    this.country = country;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ",<br>");
    console.log("Operation system " + this.system + ", produce in " + this.country + ".");
}

const iPhone6S = new Phone("Apple", 2250, "silver", 'OS', 'USA');
const onePlusOne = new Phone("One", 500, "gold", "Android", "China");
const samsungGalaxyS6 = new Phone("Samsung", 2500, "white", "Android", "Korea");
