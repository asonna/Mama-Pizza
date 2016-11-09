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
  alert("toto6");
  alert(this.allMeatCost);
}

Pizza.prototype.calculateVeggieToppingsCost = function() {
  for(i=0; i < this.allVeggieToppings.length; i++) {
    this.allVeggieCost += parseInt(this.allVeggieTopping[i]);
  }
}

Pizza.prototype.addTotalCost = function() {
  totalCost = parseInt(this.size) + this.allMeatCost + this.allVeggieCost;
  alert("totalCost = " + totalCost);
}


// User interface
$(document).ready(function() {
  $(".btn-primary").click(function(event) {
    event.preventDefault();
    alert("toto1");

    var checkedSize = $('input:radio[name=size]:checked').val();
    var meatToppingsCost =0;
    var veggieToppingsCost = 0;

    var newPizza = new Pizza(checkedSize);

    $.each($("input[name='meat']:checked"), function(){
      newPizza.allMeatToppings.push($(this).val());
    });

    $.each($("input[name='veggie']:checked"), function(){
      newPizza.allVeggieToppings.push($(this).val());
    });

    meatToppingsCost = newPizza.calculateMeatToppingsCost();
    alert("toto5")
    alert(meatToppingsCost);
    veggieToppingsCost = newPizza.calculateVeggieToppingsCost();
    alert(veggieToppingsCost);
    pizzaTotalCost = newPizza.addTotalCost();


    $("#orderSum").show();
    $("#pizzaOrder").hide();
    $("#output ul").append("<li><strong>" +"Your pizza cost is: $" + pizzaTotalCost + "</strong></li>" + "<li>" + "This includes a base size costing: $" + checkedSize + "</li>" + "<li>" + newPizza.allMeatToppings.length + " meat toppings costing $" + meatToppingsCost + "</li>" + "<li>" +"And " + newPizza.allVeggieToppings.length + " veggie toppings costing $" + veggieToppingsCost + "</li>");
  });
});
