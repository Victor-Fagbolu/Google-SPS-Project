function test() {
    console.log("HI")
}

function getComments() {
    fetch("/data").then((response) => response.json()).then((comments) => {
        const commentList = document.createElement('ul')
        comments.map(C => {
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>

            //Creating Div
            const card = document.createElement('card')
            card.className('card')
            const header = document.createElement('card-header')
            header.className('card-header')
            const body = document.createElement('card-body')
            body.className('card-body')
            const text = document.createElement('card-text')
            text.className('card-text')

            console.log(card)

            //Connecting Child
            card.appendChild(header)
            body.appendChild(title)
            body.appendChild(text)
            card.appendChild(body)
            
            const name = C.name
            const com = C.comment
            const likes = C.likes
            const entry = createListElement(com);
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