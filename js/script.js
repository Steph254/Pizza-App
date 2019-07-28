var pizzaSize = { small: 250, medium: 400, large: 1000 };
var pizzaCrust= {crispy: 100, thick:150,  thin:0,glutenfree:200}
var pizzaTopping={mushroom:50, pepperoni:50, bacon:50, cheese:0}





function Pizza(size, topping,crust) {
  this.size = size;
  this.topping = topping;
  this.crust = crust;
}
$(document).ready(function() {
  $("form.topping1").submit(function(event) {
    event.preventDefault();

    var inputtedSize=$("input.size").val();
    var inputtedTopping= $("input.topping").val();
    var inputtedCrust= $("input.crust").val();

    var newPizza = new Pizza(inputtedTopping, inputtedCrust);

    $("ul#pizzaorder").append("<li><span class='order'>" + newPizza.fullOrder() + "</span></li>");

    $("input.size").val("");
    $("input.topping").val("");
    $("input.crust").val("");
  });
  Pizza.prototype.fullOrder = function() {
    return this.size + " " + this.topping+" "+this.crust;
  }
});
