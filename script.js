console.log(data[1]['user']);
document.getElementById('user').textContent=data[1]["username"];
var loc="img/"+data[1]['tag']+"/"+data[1]['url'].slice(3,-1)+".jpg";
console.log(loc);
document.getElementById('photo').src=loc;