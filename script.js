   function moveto(that){ 
    var nav1 = document.getElementById("nav-home");
    var nav2 = document.getElementById("nav-about");
    var nav3 = document.getElementById("nav-event");
    var nav4 = document.getElementById("nav-speaker");
    var nav5 = document.getElementById("nav-contact");

    var navArray = [nav1,nav2,nav3,nav4,nav5];
   
    var home = document.getElementById("land");
    var about = document.getElementById("info");
    var events = document.getElementById("event");
    var speakers = document.getElementById("speaker-container");
    var contact = document.getElementById("contact-us");
    
    var div = [home,about,events,speakers,contact];
        
    var ind = navArray.indexOf(document.getElementById(that.id));
    div[ind].scrollIntoView({behaviour: "smooth"});   
    for(var i=0;i<navArray.length;i++){
        if(div[i] != that){
            div[i].style.color = "#fff";
        }
        else{
            that.style.color = "#ffb84d";

        }
    }
}
    

