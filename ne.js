console.log("spotify")

//Initialize variables

let index = 0;
let audioElememt = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif =  document.getElementsByClassName("gif")
let songItem = Array.from(document.getElementsByClassName("songItem"))
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))

let songs = [
    {songName: "Abdul Hannan - Haaray | Shahmeer Raza Khan", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Azaan Sami Khan - Ik Lamha ft. Maya Ali", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Labon Ko | Pritam | K.K.| Akshay Kumar", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Coke Studio | Season 14 | Pasoori", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "King Rocco - Tu Aake Dekhle", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kuch Iss Tarah", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Aziyat - Pratyush Dhiman  Jahnavi Rao", filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Abdul Hannan & Rovalio - Iraaday ", filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Maanu - Melancholic ", filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
]

songItem.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})
if(masterPlay){
masterPlay.addEventListener('click',()=>{
   if(audioElememt.paused || audioElememt.currentTime<=0){  
        audioElememt.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        /* document.getElementsByClassName("gif").style.opacity = 1; */
   } 
   else{
    audioElememt.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
   } 
})
}
audioElememt.addEventListener('timeupdate',()=>{
    var progress = parseInt((audioElememt.currentTime/audioElememt.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElememt.currentTime =  myProgressBar.value * audioElememt.duration / 100;
})

const makeAllPlay = ()=>{
    songItemPlay.forEach((element)=>{
    element.classList.remove("fa-pause-circle")
    element.classList.add("fa-play-circle");

    masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    })
}
songItemPlay.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{

        makeAllPlay();
        var index = parseInt(e.target.id);

        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle")

        audioElememt.src = songs[i].filePath;
        audioElememt.currentTime = 0;

        var playPromise = audioElememt.play();

       /*  document.getElementById("gifname").innerHTML = songs[i].songName; */
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

        if (playPromise !== undefined) {
            playPromise.then(function() {
             
            }).catch(function(error) {
        
            });
          }
    })
 })
 
 