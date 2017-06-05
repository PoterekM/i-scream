$(document).ready(function() {

 var flavors = ["Vanilla", "Cookie Dough", "Super Man"];
 flavors.forEach(function(flavor) {
   $("#flavorsList").append("<li>" + flavor + "</li>");
 })


});
