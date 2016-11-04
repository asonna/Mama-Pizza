// Business logic
function Pizza(size,meatToppings, veggieToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.allMeatToppings = [];
  this.allVeggieToppings = [];
}

Pizza.prototype.calculateMeatToppingsCost = function() {
  var allMeatCost = 0;
  for(i=0; i < this.allMeatToppings.length; i++) {
    meatCost += parseInt(this.meatToppings);
  }

}

Pizza.prototype.calculateVeggieToppingsCost = function() {
  var eachVeggieCost = 0;

  for(i=0; i < this.allVeggieToppings.length; i++) {
    veggieCost += parseInt(this.veggieToppings);
  }
}

// Pizza.prototype.addTotalCost = function() {
//   totalCost = parseInt(this.size) + calculateMeatToppingsCost + calculateVeggieToppingsCost;
// }


// User interface
$(document).ready(function() {
  $(".btn-primary").click(function(event) {
    event.preventDefault();

    var checkedSize = $('input:radio[name=size]:checked').val();
    var checkedMeat = $('input:radio[name=meat]:checked').val();
    var checkedVeggie = $('input:radio[name=veggie]:checked').val();
    var newAllMeatToppings = [];
    var newAllVeggieToppings = [];

    $.each($("input[name='meat']:checked"), function(){
      newAllMeatToppings.push($(this).val());
      return newAllMeatToppings;
    });

    $.each($("input[name='veggie']:checked"), function(){
      newAllVeggieToppings.push($(this).val());
      return newAllVeggieToppings;
    });

    var newPizza = new Pizza(checkedSize, checkedMeatToppings, checkedVeggieToppings);

    meatToppingsCost = newPizza.calculateMeatToppingsCost();
    veggieToppingsCost = newPizza.calculateVeggieToppingsCost();
    // pizzaTotalCost = newPizza.addTotalCost();


    $("#orderSum").show();
    $("#pizzaOrder").hide();
    $("#output ul").append("<li>" + newAllMeatToppings + "</li>" + "<li>" + newAllVeggieToppings + "</li>")+ "<li>" + meatToppingsCost + "</li>"+ "<li>" + veggieToppingsCost + "</li>"+ "<li>" + checkedSize + "</li>";

  });
});
