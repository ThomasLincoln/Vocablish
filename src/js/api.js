
// const pesquisa = "car"


// const getButton = document.querySelector(".gerarImagem");
// const getImage = document.querySelector(".imageDisplay");


// getButton.addEventListener('click', async()=>{
//     let randomImage = await getNewImage();
//     getImage.src = randomImage;
// })

// async function getNewImage(){
//     return fetch(requestUrl)
//     .then((response) => response.json())
//     .then((data) =>{
//         let allImages = data.results[randomNumber];
//         return allImages.urls.regular;
//     })
// }



// ---------------------- convertendo em function ---------------------------------
async function mudaImagem(busca, i){
    const imagem = document.querySelectorAll(".thumbnail");
    console.log("image ", imagem)
    let randomImage = await geraImagem(busca);
    imagem[i].src = randomImage;
    imagem[i].style.width = "30vw";
    imagem[i].style.height = "30vh";
    imagem[i].style.objectFit = "cover";
    



}

async function geraImagem(busca){
    const requestUrl = `https://api.unsplash.com/search/photos/?query=${busca}&client_id=`;
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(requestUrl)
    .then((response) => response.json())
    .then ((data) => {
        console.log(data)
        let allImages = data.results[randomNumber];
        return allImages.urls.small;
    })   
}

for(let i = 0; i < 8; i++){
    mudaImagem("write", i)
}