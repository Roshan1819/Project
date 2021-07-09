// accumlate totaol price
let amount = 0;
        function addFlower(){
            
            var newf = document.getElementById("flowname").value;
            var table = document.getElementById("flowerlist");
            var quant = document.getElementById("quant").value;
            // console.log(newf);
            // console.log(price);
            // console.log(stock);
            var price = 0;
           if(newf == "Rose")
           {
                price = 50;
           }
           else if(newf=="Lilly")
           {
               price = 20;
           }
           else if(newf == "Gerbera")
           {
               price = 60;
           }
           else if(newf == "Lotus")
           {
               price = 30;
           }
           else if(newf == "Jasmine")
           {
               price = 20;
           }
           else if(newf == "Tulips")
           {
               price = 40;
           }
           else
           {
               price = 50
           }
            
            var row = table.insertRow(-1);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            // var c1 = document.createElement("center");
            // var c2 = document.createElement("center");
            
            
            
            cell0.innerHTML = "<center>"+newf+"</center>";
            cell1.innerHTML = "<center>"+price+"</center>";
            cell2.innerHTML = "<center>"+quant+"</center>";
            cell3.innerHTML = "<center>"+quant*price+"</center>";
            cell4.innerHTML = '<center><button onClick = "remFlow(this)">Remove</button></center>';
            
            amount = amount + quant*price;
        }

        function remFlow(x){
            
           var i = x.parentNode.parentNode.parentNode.rowIndex;
           var p = document.getElementById("flowerlist").rows[i].cells[3].innerText;
           document.getElementById("flowerlist").deleteRow(i);
           amount = amount - p;
        }

        function billing()
        {
            console.log("amount = "+amount);
            var h = document.getElementById("totalamount");
            h.innerHTML = "<center><h2>Your Total Amount is "+amount+"</h2></center>";
        }

        // color flashing
        // function flash ()
        //     {
        //         var t = document.getElementById("text2");
        //         t.style.color = (t.style.color == "brown") ? "darkcyan" : "brown";
        //     }
        //     setInterval(flash, 500);