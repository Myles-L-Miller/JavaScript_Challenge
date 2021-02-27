// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody")
data.forEach((row)=>{
  //console.log(row)
  var r=tbody.append("tr")
  Object.values(row).forEach((obj)=>{
  r.append("td").text(obj)  
  })  
}) 
function createtable(){
tbody.html("")
Filtertext=d3.select("#datetime").property("value")
console.log(Filtertext)
newdata=data.filter(row=>row.datetime==Filtertext)
newdata.forEach((row)=>{
    //console.log(row)
    var r=tbody.append("tr")
    Object.values(row).forEach((obj)=>{
    r.append("td").text(obj)  
    })  
  }) 
}
d3.select("#filter-btn").on("click", createtable)