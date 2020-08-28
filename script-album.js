var repeater;
var names = ["England", "France", "Italy", "Spain"];
var n = 5;

function find_path(idx, pic_id){
    var path ="Images/" + names[ idx ] + "/" + pic_id;
    path = path + ".jpg";
    return path;
}

function showPics(idx){

  var pic_id = 0;
  var img = document.getElementById(names[ idx ]);
  img.border= "1px solid black";
  repeater = setInterval(show, 800);

  function show(){

      pic_id =( pic_id + 1 ) % n;
      var path = find_path(idx, pic_id);
      img.src = path;
  }

}

function stop(idx){
    clearTimeout(repeater);
    var img = document.getElementById(names[ idx ]);
    img.border= "0px";
}

function showAlbum(idx){
    album.width=630;
    album.height=520;
    album.border=10;
    var i;
    for( i = 0; i < n ; i++ ){
      var name = "s" + i;
      var img = document.getElementById(name);
      img.src=find_path(idx,i);
      img.width= 100;
      img.height= 100;
    }
    original.src=find_path(idx, 0);
    original.width=520;
    original.height=520;
}
