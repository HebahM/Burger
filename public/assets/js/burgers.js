$(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
          name: $("#burger").val().trim()
        }
        // alert("You clicked the submit button")
        // var input = $("#burger").val();
        // var newBurger = {burger_name: input};
        // console.log("newBurger: "+ JSON.stringify(newBurger))
        // console.log("input: "+ input)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("added new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })

    $(".devour").on("click", function(event){
        event.preventDefault();
        // alert("You've eaten the " + $(this).data("name"))
        var id = $(this).data("id")
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {devoured: 1}
          }).then(
            function() {
              console.log("changed devoured to true");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })
})