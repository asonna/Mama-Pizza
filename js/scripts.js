// Business logic
function Pizza(size,meatToppings, veggieToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
}

// Pizza.prototype.selectSize = function() {
//   this.size =
//
// }
//
// Pizza.prototype.selectMeatToppings = function(size, meatToppings) {
//   var allMeatToppings = [];
//   var allMeatCost = 0;
// for()
//
// }
//
// Pizza.prototype.selectVeggieToppings = function(veggieToppings) {
//   var allVeggieToppings = [];
//   var allVeggieCost = 0;
//
//   for
// }
//
// Pizza.prototype.addTotalCost = function() {
//   totalCost =
// }



// User interface
$(document).ready(function() {
  $(".btn-primary").click(function(event) {
    event.preventDefault();
debugger;
    var checkedSize = $('input:radio[name=size]:checked').val();
    var checkedMeatToppings = [];
    var checkedVeggieToppings = [];

    $.each($("input[name='meat']:checked"), function(){
      checkedMeatToppings.push($(this).val());
      return checkedMeatToppings;
    });

    $.each($("input[name='veggie']:checked"), function(){
      checkedVeggieToppings.push($(this).val());
      return checkedVeggieToppings;
    });

    $("#orderSum").show();
    $("#pizzaOrder").hide();
    $("#output ul").append("<li>" + checkedMeatToppings + "</li>" + "<li>" + checkedVeggieToppings + "</li>");

    // var checkedDelivery =
    // var checkedToppings =
    //
    // var newPizza = new Pizza()
  });
});
