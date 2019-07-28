var orders=[];

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
var pizzaToppings = {
  small: {
    mushroom: 50,
    pepperoni: 50,
    bacon: 50,
    cheese: 0
  },
  medium: {
    mushroom: 70,
    pepperoni: 70,
    bacon: 70,
    cheese: 20
  },
  large: {
    mushroom: 90,
    pepperoni: 90,
    bacon: 900,
    cheese: 20
  },
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
    topping += parseInt(pizzaToppings[this.size]['bacon']);
  }
  if ($('#toppingPepperoni').is(":checked")) {
    topping += parseInt(pizzaToppings[this.size]['pepperoni']);
  }
  if ($('#toppingMushrooms').is(":checked")) {
    // console.log(size, crust, topping);
    topping += parseInt(pizzaToppings[this.size]['mushroom']);
  }
  if ($('#toppingCheese').is(":checked")) {
    // console.log(size, crust, topping);
    topping += parseInt(pizzaToppings[this.size]['cheese']);
  }

  console.log(size, crust, topping);
  return size + crust + topping;
}

var checkout = function(){
    if($('#delivery').is(":checked")){
      orders.push(150)
    }
    var total=0
    for (var i = 0; i < orders.length; i++) {
      total += parseInt(orders[i]);
    }
    alert("Total cost is"+" Ksh."+total);
}

$(document).ready(function() {
  $("#checkout").click(function(){
    checkout();
  });


  $("#topping1").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    var inputtedCrust = $("#crust").val();

    var inputtedTopping = '';
    if ($('#toppingBacon').is(":checked")) {
      inputtedTopping += ' Bacon';
    }
    if ($('#toppingMushrooms').is(":checked")) {
      inputtedTopping += ' Mushrooms';
    }
     if ($('#toppingPepperoni').is(":checked")) {
      inputtedTopping += ' Pepperoni';
    }
     if($('#toppingCheese').is(":checked")) {
      console.log(inputtedTopping)
      inputtedTopping += ' Cheese';
    }

    var newPizza = new Pizza(inputtedSize,inputtedTopping, inputtedCrust);

    $("ul#pizzaorder").append("<li><span class='order'>" + newPizza.fullOrder() + "</span></li>");
    orders.push(newPizza.calculateCost());
    $('input:checkbox:checked').prop('checked', false);
   });
  });
