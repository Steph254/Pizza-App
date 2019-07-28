var orders: [];

var pizzaSize = {
  small: 250,
  medium: 400,
  large: 1000
};
var pizzaCrust = {
  crispy: 100,
  thick: 150,
  thin: 0,
  glutenfree: 200
}
var pizzaTopping = {
  mushroom: 50,
  pepperoni: 50,
  bacon: 50,
  cheese: 0
}
function Pizza(size, topping, crust) {
  this.size = size;
  this.topping = topping;
  this.crust = crust;
}
Pizza.prototype.fullOrder = function() {
  return this.size + " " + this.topping + " " + this.crust;
}
Pizza.prototype.calculateCost = function() {
  var size = pizzaSize[this.size];
  var crust = pizzaCrust[this.crust];
  var topping = 0;
  if ($('#toppingBacon').is(":checked")) {
    topping += pizzaToppings['bacon'];
  } else if ($('#toppingPepperoni').is(":checked")) {
    topping += pizzaToppings['pepperoni'];
  } else if ($('#toppingMushrooms').is(":checked")) {
    topping += pizzaToppings['mushrooms'];
  } else($('#toppingCheese').is(":checked")) {
    topping += pizzaToppings['cheese'];
  }

  return size + crust + topping;
}

var checkout = function(){

}

$(document).ready(function() {
  $("form#topping1").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedCrust = $("select#crust").val();
    var inputtedTopping = '';
    if ($('#toppingBacon').is(":checked")) {
      inputtedTopping += ' Bacon';
    } else if ($('#toppingMushrooms').is(":checked")) {
      inputtedTopping += ' Mushrooms';
    } else if ($('#toppingPepperoni').is(":checked")) {
      inputtedTopping += ' Pepperoni';
    } else($('#toppingCheese').is(":checked")) {
      inputtedTopping += ' Cheese';
    }

    var newPizza = new Pizza(inputtedSize,inputtedTopping, inputtedCrust);

    $("ul#pizzaorder").append("<li><span class='order'>" + newPizza.fullOrder() + "</span></li>");
      orders.push(newPizza.calculateCost());
    $('input:checkbox:checked').prop('checked', false);
   });
  });
});
