function moveto(that) { 
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

function movein() {
    
    var schedule = document.getElementById("schedule-button");
    var arrow = document.getElementById("angle-right");
    schedule.style.marginRight = "-185px";
    schedule.style.transition = "0.8s ease-in-out";
    arrow.style.display = "none";
    window.setTimeout(leftArrow,750);
}
    
function leftArrow(){
    
    var left = document.getElementById("angle-left");
    left.style.display = "";
}

function scheduleOut(){
    
    var schedule1 = document.getElementById("schedule-button");
    var left1 = document.getElementById("angle-left");
    schedule1.style.marginRight = "8px";
    schedule1.style.transition = "0.8s ease-in-out";
    left1.style.display = "none";
    window.setTimeout(rightArrow,850);
}

function rightArrow(){
    
    var arrow1 = document.getElementById("angle-right");
    arrow1.style.display = "block";
}


window.onscroll = function() {scrollEvent()};

function scrollEvent(){

    if(document.body.scrollTop>=150 || document.documentElement.scrollTop>=150){
        up.style.display = "";
    }
    else{
        up.style.display = "none";
    }
}

function goUp(){
    var up = document.getElementById("up");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}