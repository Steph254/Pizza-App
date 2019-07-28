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
