const searchGiphy = document.getElementById("search");
const submit = document.getElementById("submit");
const removeImages = document.getElementById("remove");
const giphyContainer = document.getElementsByClassName("giphyContainer")[0];

function submitHandler(e){
    e.preventDefault();
    findSearchedGiphy(giphyContainer);
};

async function findSearchedGiphy(){
    let searchTerm = searchGiphy.value;
    const response = await axios.get("http://api.giphy.com/v1/gifs/search",{
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    })
    let numResults = response.data.data.length;
    let randomIdx = Math.floor(Math.random() * numResults);
    let newGifURL = response.data.data[randomIdx].images.original.url;

    let giphyWrapper = document.createElement('div');
    let newGif = document.createElement('img');
    newGif.src = newGifURL;

    giphyContainer.append(giphyWrapper);
    giphyWrapper.append(newGif);
}

removeImages.addEventListener('click', function(){
    giphyContainer.innerHTML = '';
})