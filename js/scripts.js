// Business logic
function Pizza(size, meatToppings, veggieToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.allMeatToppings = [];
  this.allVeggieToppings = [];
  this.allMeatCost = 0;
  this.allVeggieCost = 0;
}

Pizza.prototype.calculateMeatToppingsCost = function() {
  for(i=0; i < this.allMeatToppings.length; i++) {
    this.allMeatCost += parseInt(this.MeatToppings);
    alert("toto6");

    this.allMeatCost += parseInt(this.meatToppings);
  }
}

Pizza.prototype.calculateVeggieToppingsCost = function() {
  for(i=0; i < this.allVeggieToppings.length; i++) {
    this.allVeggieCost += parseInt(this.veggieToppings);
  }
}

// Pizza.prototype.addTotalCost = function() {
//   totalCost = parseInt(this.size) + calculateMeatToppingsCost + calculateVeggieToppingsCost;
// }


// User interface
$(document).ready(function() {
  $(".btn-primary").click(function(event) {
    event.preventDefault();
    alert("toto1");

    var newPizza = new Pizza(checkedSize, checkedMeat, checkedVeggie);

    var checkedSize = $('input:radio[name=size]:checked').val();
    var checkedMeat = $('input:checkbox[name=meat]:checked').val();
    var checkedVeggie = $('input:checkbox[name=veggie]:checked').val();
    var meatToppingsCost =0;
    var veggieToppingsCost = 0;

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
    pizzaTotalCost = newPizza.addTotalCost();


    $("#orderSum").show();
    $("#pizzaOrder").hide();
    $("#output ul").append("<li>" + newAllMeatToppings + "</li>" + "<li>" + newAllVeggieToppings + "</li>" + "<li>" + meatToppingsCost + "</li>"+ "<li>" + veggieToppingsCost + "</li>"+ "<li>" + checkedSize + "</li>");

  });
});
