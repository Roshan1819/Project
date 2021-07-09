

   
   var dataUrl = "http:localhost:9000/api/getcustomers"


      $.ajax({
        url:dataUrl,
        type:"GET",
        success: function(data){
            console.log(data);
        },
        error:function(err){
            console.log(err);
        }
    });