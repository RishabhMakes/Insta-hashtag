// console.log(data[1]['user']);
// document.getElementById('user').textContent=data[1]["username"];
// var loc="img/"+data[1]['tag']+"/"+data[1]['url'].slice(3,-1)+".jpg";
// console.log(loc);
// document.getElementById('photo').src=loc;

function showPost(post){
    var loc="img/"+data[1]['tag']+"/"+post['url'].slice(3,-1)+".jpg";
    var out='<span id="'+ post['url'].slice(3,-1) +'"><h4>'+ post['username'] +'</h4><img src='+ loc +'></span>';
    $("wrapper").append(out);
}

function displayAll(){
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        console.log(obj.user);
        showPost(obj);
    }
    console.log("Done displaying data")
}

displayAll();
