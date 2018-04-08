function getfile(file,callback)
{
  var xhr =new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState=== 4 && xhr.status =="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
  }
  getfile("data.json",function(text)
  {
    let data = JSON.parse(text);
    console.log(data);
    career(data.career);
    education(data.education);
    skill(data.skills);
})
var right=document.querySelector(".content");
function career(car)
{
console.log(car.info)
var p=document.createElement("p");
p.textContent=car.info;
right.appendChild(p);
}
function education(edu)
{
  var heading=document.createElement("h1");
  heading.textContent="Educational Qualifications";
  right.appendChild(heading);
  var hr=document.createElement("hr");
    right.appendChild(hr);
  var list=document.createElement("ul");
  right.appendChild(list);
  for(var i=0;i<edu.length;i++)
  {
    console.log(edu[i].degree);
    var listitem=document.createElement("li");
    listitem.textContent=edu[i].degree;
    list.appendChild(listitem);
    var inst=document.createElement("p");
    inst.textContent=edu[i].institue;
    list.appendChild(inst);
    var year=document.createElement("p");
    year.textContent=edu[i].data;
    list.appendChild(year);
  }
}
function skill(sk)
{
  var heading=document.createElement("h1");
  heading.textContent="skills";
  right.appendChild(heading);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var table=document.createElement("table");
  right.appendChild(table);
  var table_data="";
  for(var i=0;i<sk.length;i++)
  {
    table_data+="<tr><td>"+sk[i].sname+"</td><td>"+sk[i].sdata+"</td></tr>"
  }
  table.innerHTML=table_data;
  table.border="1";
}
