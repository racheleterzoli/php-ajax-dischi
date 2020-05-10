$(document).ready(function(){
  $.ajax({
    url:'server.php',
    method:'GET',
    success : function(data){
      var template = Handlebars.compile($("#entry-template").html());
      for (var i = 0; i < data.length; i++) {
        var album=data[i];
        console.log(album);
        var titolo=album.title;
        var generato=template({
          title:album.title,
          poster:album.poster,
          author:album.author,
          year:album.year,
        });
        $(".cds-container").append(generato);
      }
    },
    error : function(err){

    }
  });
});
