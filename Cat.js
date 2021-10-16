function Cat() {
	console.log("Mew mew")
	this.stomacth = [];
}
Cat.prototype.eat = function(mouse) {
	this.stomacth.push(mouse);
	return this;
}
module.exports = Cat;