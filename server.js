//server using Express
const express=require('express');
const app=express();
var path=require('path');



//json data type of DATA

//collection of flowers:
var flowers=[{"id":1,"name":'Gerbera',"description":"Wedding Flower","unitprice":12,"quantity":5000},
{"id":2,"name":'Rose',"description":"Valentine Flower","unitprice":25,"quantity":5000},
{"id":3,"name":'Lotus',"description":"Worship Flower","unitprice":50,"quantity":5000},
{"id":4,"name":'Carnations',"description":"Decoration Flower","unitprice":75,"quantity":5000}];

//collection of customers:
var customers=[{"id":1,"name":"Shubham","Lastname":"Dawkare","email":"daw@gmail.com","phone":9896787},
{"id":2,"name":"Roshan","Lastname":"Patil","email":"ros@gmail.com","phone":98965467},
{"id":3,"name":"Madhuri","Lastname":"Deshmukh","email":"mau@gmail.com","phone":1241237},
{"id":4,"name":"Renu","Lastname":"Joshi","email":"renu@gmail.com","phone":434354}];

//configuration:
const publicPath=path.join(__dirname,'/public')
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//API Handlers:
app.get("/" || '/home.html',function(req,res)
{
    res.sendFile(publicPath+"/index.html");
});

app.get("/aboutus.html",function(req,res)
{
    res.sendFile(publicPath+"/about.html");
});

app.get("/contact.html",function(req,res)
{
    res.sendFile(publicPath+"/contact.html");
});

app.get("/login.html",function(req,res)
{
    res.sendFile(publicPath+"/login.html");
});

app.get("/register.html",function(req,res)
{
    res.sendFile(publicPath+"/register.html");
});

app.get("/careers.html",function(req,res)
{
    res.sendFile(publicPath+"/careers.html");
});

app.get("/feedback.html",function(req,res)
{
    res.sendFile(publicPath+"/feedback.html");
});

app.get("/order.html",function(req,res)
{
    res.sendFile(publicPath+"/order.html");
});


app.get("/customers.html",function(req,res)
{
    res.sendFile(customers);
});


app.get("/cart.html",function(req,res)
{
    res.sendFile(publicPath+"/cart.html");
});


//******************************************************** */


//CRUD operations:
//Insert operation
app.post("/api/flowers",function(req,res)
{
    
    var bol=true;
    for(var i=0;i<flowers.length;i++)
    {
        if(req.body.name == flowers[i].name)
        {
            bol=false;
            res.end("Object already exists Try with new id");
            
        }
    }
    if(bol == true)
    {
        //add new json object to collection flowers
        console.log("new object to be appended to existing collection");
        var newFlower=JSON.stringify(req.body);
        flowers.push(req.body);
        console.log(newFlower);
        res.send('new Object is appended to collection');
    }
});

//Update operation
app.put("/api/flowers/:id",function(req,res)
{
    let id=req.params.id;
    var newFlower=JSON.stringify(req.body);
    let ind=flowers.findIndex(e => e.id == id);
    flowers.splice(ind,1,req.body);
    console.log("Existing  object to be modified by received object from client");

    res.send('Existing object is replaced by new object received from client');
});

//Delete operation
app.delete("/api/flowers/:id",function(req,res)
{
    let id=req.params.id;
    let f=flowers.find(x => x.id == id);
    flowers=flowers.filter(x => x.id != id); //display without object of id
    res.send(flowers);
});

//**************************************************************************************** */


app.get("/api/getcustomers",function(req,res)
{
    res.send(customers);
});

//CRUD operations:
//Insert operation
app.post("/api/customers",function(req,res)
{
  let customer = JSON.stringify(req.body);
  console.log(customer);
  customers.push(req.body);
  res.send("<h1>"+JSON.stringify(customers)+"</h1>");
    
});

//Update operation
app.put("/api/customers/:id",function(req,res)
{
    console.log("Existing  object to be modified by received object from client");

    res.send('Existing object is replaced by new object received from client');
});

//Delete operation
app.delete("/api/customers/:id",function(req,res)
{
    var id=req.params.id;
    let c=customers.find(x => x.id == id);
    customers=customers.filter(x => x.id != id);
    res.send(customers);
});

///************************************************************************************ */

//server registering:
var server =app.listen(9000,function()
{
    var host = server.address().address  
    var port = server.address().port
    console.log("Server listening to http://%s:%s",host,port);
});

app.post("/api/login",(req,res) =>
{
    var claim=req.body;
    if(claim.username == "rosh" && claim.password == "1234")
    {
        res.sendFile(publicPath+"/order.html");
    }
    else
    {
        res.send("Invalid User");
    }
});