function test(e) {
    console.log(e)
}
function popup() {
    console.log('show')
var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function getComments() {
    fetch("/data").then((response) => response.json()).then((comments) => {
        const commentList = document.createElement('ul')
        comments.map(C => {
            const name = C.name
            const com = C.comment
            const time = C.currentTime
            
            //Creating Div
            const card = document.createElement('div')
            card.setAttribute("class","card")
            card.setAttribute("id","card")

            const header = document.createElement('h2')
            header.setAttribute("class","badge badge-secondary")
            header.innerHTML=name

            const body = document.createElement('div')
            body.setAttribute("class","card-body")

            const text = document.createElement('h3')
            text.setAttribute("class","card-text")
            text.innerHTML = com

            const Currtime = document.createElement('h6')
            Currtime.setAttribute("class","card-time")
            Currtime.innerHTML = time

            //Connecting Child
            card.appendChild(header)
            body.appendChild(text)
            body.appendChild(Currtime)
            card.appendChild(body)
            
            console.log(card)
            const entry = createListElement(card);
            commentList.appendChild(card)
        })
        const commentSection = document.getElementById("commentSection");
        commentSection.innerHTML = ''
        commentSection.appendChild(commentList)
    })
}
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

me = { index: 1}
place = { index: 1}
movie = { index: 1}
show = { index: 1}
player = { index: 1}
anime = { index: 1}

function setimage(type,ind) {
    const imgUrl = './images/'+ type + ind + '.jpg';
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.width = 300;
    imgElement.height = 400;

    let id = type + 'Container'
    const imageContainer = document.getElementById(id);
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}
function increment(sy,type, c){
    if(sy === '+'){
        type.index+=1;
    } else {
        type.index-=1;
    }
    if(type.index === 0)
        type.index = c;
    else if(type.index === c+1)
        type.index = 1;
}    
function cycleMe(sy) {
    increment(sy,me,5)
    setimage('me',me.index) 
}
function cyclePlace(sy) {
    increment(sy,place,2)
    setimage('place',place.index) 
}
function cycleMovie(sy) {
    increment(sy,movie,3)
    setimage('movie',movie.index) 
}
function cycleShow(sy) {
   increment(sy,show,3)
    setimage('show',show.index) 
}
function cyclePlayer(sy) {
    increment(sy,player,3)
    setimage('player',player.index) 
}
function cycleAnime(sy) {
    increment(sy,anime,3)
    setimage('anime',anime.index) 
}