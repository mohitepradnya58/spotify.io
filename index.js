console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audionElement = new Audio ('songs/mp3 play.mp3');
let masterplay =document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "O Sheth", filePath:"songs/mp3 play.mp3", coverPath:"cover/cover1.jpg"},
    {songName: "Teri Meri", filePath:"songs/Teri Meri.mp3", coverPath:"cover/cover6.jpg"},
    {songName: "birthday", filePath:"songs/birthday.mp3", coverPath:"cover/cover4.jpg"},
    {songName: "itti si Hasi", filePath:"songs/itti si Hasi.mp3", coverPath:"cover/cover2.jpg"},
    {songName: "khushi", filePath:"songs/khushi.mp3", coverPath:"cover/cover3.jpg"},
    {songName: "ringtone", filePath:"songs/ringtone.mp3", coverPath:"cover/cover5.jpg"},
]

songItems.forEach((element, i)=> {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

//audioElement.play

//handle play pause
masterplay.addEventListener('click', ()=>{
    if(audionElement.paused || audionElement.currentTime<=0){
     audionElement.play();
     masterplay.classList.remove("fa-play");
     masterplay.classList.add("fa-pause");
     gif.style.opacity = 1;
    }
    else{
        audionElement.pause();
     masterplay.classList.remove("fa-pause");
     masterplay.classList.add("fa-play");
     gif.style.opacity = 0;
    }
})

//Listen to events
audionElement.addEventListener('timeupdate', ()=>{
    

    progress = parseInt((audionElement.currentTime/audionElement.duration)*100);
    
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audionElement.currentTime = myProgressBar.value* audionElement.duration/100;
})

 