function Cat() {
	console.log("Mew mew")
	this.stomacth = [];
}
Cat.prototype.eat = function(mouse) {
	this.stomacth.push(mouse);
	return this;
}
console.log("MEW MEW")
module.exports = Cat;