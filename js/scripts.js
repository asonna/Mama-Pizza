// Business logic
function Pizza(size) {
  this.size = size;
  this.allMeatToppings = [];
  this.allVeggieToppings = [];
  this.allMeatCost = 0;
  this.allVeggieCost = 0;
  this.totalCost = 0;
}

Pizza.prototype.calculateMeatToppingsCost = function() {
  for(i=0; i < this.allMeatToppings.length; i++) {
    this.allMeatCost += parseInt(this.allMeatToppings[i]);
  }
  return this.allMeatCost;
}

Pizza.prototype.calculateVeggieToppingsCost = function() {
  for(i=0; i < this.allVeggieToppings.length; i++) {
    this.allVeggieCost += parseInt(this.allVeggieToppings[i]);
  }
  return this.allVeggieCost;
}

Pizza.prototype.addTotalCost = function() {
  this.totalCost = parseInt(this.size) + this.allMeatCost + this.allVeggieCost;
  return this.totalCost;
}

// User interface
$(document).ready(function() {
  $(".btn-primary").click(function(event) {
    event.preventDefault();

    var checkedSize = $('input:radio[name=size]:checked').val();
    var meatToppingsCost =0;
    var veggieToppingsCost = 0;
    var pizzaTotalCost = 0;

    var newPizza = new Pizza(checkedSize);

    $.each($("input[name='meat']:checked"), function(){
      newPizza.allMeatToppings.push($(this).val());
    });

    $.each($("input[name='veggie']:checked"), function(){
      newPizza.allVeggieToppings.push($(this).val());
    });

    meatToppingsCost = newPizza.calculateMeatToppingsCost();
    veggieToppingsCost = newPizza.calculateVeggieToppingsCost();
    pizzaTotalCost = newPizza.addTotalCost();


    $("#orderSum").show();
    $("#pizzaOrder").hide();
    $("#output ul").append("<li>" +"Your pizza cost is: $" + pizzaTotalCost + "</li>" +
    "<li>" + "This includes a base size costing: $" + checkedSize + "</li>" +
    "<li>" + newPizza.allMeatToppings.length + " meat toppings costing $" + meatToppingsCost + "</li>" +
    "<li>" +"And " + newPizza.allVeggieToppings.length + " veggie toppings costing $" + veggieToppingsCost + "</li>");
  });
});
