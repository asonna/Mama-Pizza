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
    var checkedToppings = [];
    var checkedSize = $('input:radio[name=size]:checked').val();

    $.each($("input[name='meat']:checked"), function(){
      checkedToppings.push($(this).val());
      return checkedToppings;
    });
    alert("My selected toppings are: " + checkedToppings.join(","));
    $("#output ul").text(checkedToppings);

    // var checkedDelivery =
    // var checkedToppings =
    //
    // var newPizza = new Pizza()
  });
});
