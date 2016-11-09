// Business logic
function Pizza(size, meatToppings, veggieToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.allMeatToppings = [];
  this.allVeggieToppings = [];
  this.allMeatCost = 0;
  this.allVeggieCost = 0;
  this.totalCost = 0;
}

Pizza.prototype.calculateMeatToppingsCost = function() {
  for(i=0; i < this.allMeatToppings.length; i++) {
    this.allMeatCost += parseInt(this.allMeatToppings[i]);
    alert("toto6");
  }
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
    var checkedMeat = $('input:checkbox[name=meat]:checked').val();
    var checkedVeggie = $('input:checkbox[name=veggie]:checked').val();
    var meatToppingsCost =0;
    var veggieToppingsCost = 0;

    var newPizza = new Pizza(checkedSize, checkedMeat, checkedVeggie);

    $.each($("input[name='meat']:checked"), function(){
      alert("a");
      newPizza.allMeatToppings.push($(this).val());
    });

    $.each($("input[name='veggie']:checked"), function(){
      newPizza.allVeggieToppings.push($(this).val());
    });

    meatToppingsCost = newPizza.allMeatCost;
    alert("toto5")
    veggieToppingsCost = newPizza.allVeggieCost;
    alert(veggieToppingsCost);
    pizzaTotalCost = newPizza.addTotalCost();
    alert('fin');


    $("#orderSum").show();
    $("#pizzaOrder").hide();
    $("#output ul").append("<li>" +"Your pizza cost is: $" + totalCost + "</li>" + "<li>" + "Your meat toppings cost $" + meatToppingsCost + "</li>" + "<li>" +"Your veggie toppings cost $" + veggieToppingsCost + "</li>" + "<li>" + newPizza.allMeatToppings + "</li>" + "<li>" + newPizza.allVeggieToppings + "</li>" + "<li>" + checkedSize + "</li>");
  });
});
