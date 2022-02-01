$(document).ready(function() {
    $("button").click(function(e){
        e.preventDefault();
        var searchType = $("select").val();
        var search = $("#search").val();
        var output = $(".content");
        $.ajax({
            url:`https://swapi.dev/api/${searchType}?search=${search}`,
            method:"GET",
            success: function(response) {            
                output.html(`Name: ${response.results[0].name}`);
            },    
        })
    })
});
