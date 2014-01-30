$(document).ready( function() {
  $(document).foundation();

  var products = [{name: "iPad", price: "$499.99", image: "http://lorempixel.com/400/400/technics/1/"},
                  {name: "Technics Some Really Long Name", price: "$499.99", image: "http://lorempixel.com/400/400/technics/2/"},
                  {name: "Netbook", price: "$299.99", image: "http://lorempixel.com/400/400/technics/3/"},
                  {name: "Ear Pods", price: "$29.99", image: "http://lorempixel.com/400/400/technics/5/"},
                  {name: "Sony Headphones", price: "$49.99", image: "http://lorempixel.com/400/400/technics/6/"},
                  {name: "Shure Earbuds", price: "$194.99", image: "http://lorempixel.com/400/400/technics/7/"},
                  {name: "65\" HDTV", price: "$397.99", image: "http://lorempixel.com/400/400/technics/9/"}
  ];

  var output = "<div class=\"row\">";
  var numCols = 3;

  $.each(products, function(index, product) {
    output += "<div class=\"large-4 small-6 columns\"> <img src=\"" + product.image +
              "\"> <div class=\"panel\"> <h5>" + product.name +
              "</h5> <h6 class=\"subheader\">" + product.price + "</h6> </div> </div> "

    // close and open new row when filled

    if (index % numCols === numCols - 1) {
      output += " </div><div class=\"row\"> "
    }

    // if this is the last product, add empty divs to fix formatting

    if (index == products.length - 1) {
      for (var c = 0; c < numCols - 1 - index % numCols; c++) {
        output += "<div class=\"large-4 small-6 columns\"></div>"
      }
    }

  });

  output += "</div>"

  $(".product-listing").html(output);
});

