var readAllData=function(data)
{
    var html = [];
    html.push("<table><thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Unit Price</th> <th>Stock Available</th></tr></thead>");

    for(var i=0;i<data.length;i++)
    {
        html.push("<tr>");
        html.push("<td>");
        html.push(data[i].id);
        html.push("</td>");
        html.push("<td>");
        html.push(data[i].name);
        html.push("</td>");
        html.push("<td>");
        html.push(data[i].description);
        html.push("</td>");
        html.push("<td>");
        html.push(data[i].unitprice);
        html.push("</td>");
        html.push("<td>");
        html.push(data[i].quantity);
        html.push("</td>");
        html.push("</tr>");
    }
    html.push("</table>");

    //document.getElementById("pID").innerHTML= JSON.stringify(data);
    var div1=document.getElementById("divData");
    div1.innerHTML=html.join(' ');

    

};