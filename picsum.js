const baseUrl1 = 'https://picsum.photos/v2/list?page=2&limit=100'

fetch(baseUrl1)
    .then(result => result.json())
    .then(json => {
        console.log(json);
        displayImage(json);
        displaySlide(json);
    })

function displayImage(json) {
    if (json.length === 0) {
        console.log("No Results");
    } else {
        let randomValue = Math.floor(Math.random() * (json.length - 0) + 0);
        let photoObject = json[randomValue];

        // let randomImg = json[0].download_url;
        // console.log(randomImg);
        // let imageAuthor = json[0].author;
        // console.log(imageAuthor);
        // let orgUrl = json[0].url;
        // console.log(orgUrl);

        document.getElementById("randomImage").src = photoObject.download_url;
        document.getElementById("author").textContent = photoObject.author;
        document.getElementById("url").textContent = photoObject.url;
        document.getElementById("url").href = photoObject.url;
    }
    //   document.getElementsByClassName("carousel-item").src = randomImg;
    //   document.getElementById('imageOne').src = imageOne;
    //   document.getElementById('imageTwo').src = imageTwo;
}
function displaySlide(json) {

    if (json.length === 0) {
        console.log("No Results");
    } else {
        //set for loop to cycle "3" times for 3 different carousel images
        for (let i = 0; i < 3; i++) {
            let randomValueSlide = Math.floor(Math.random() * (json.length - 0) + 0);
            let slideObject = json[randomValueSlide];
            //how do I point this js code to the html coursel-inner?
                document.getElementsByClassName(`image${i}`)[0].src = json[randomValueSlide].download_url;
                console.log(json[randomValueSlide].download_url);
                // const slideDiv = document.createElement("div");
                // const slideImage = json[randomValueSlide].download_url;
                // document.createElement("img").href = slideImage;
                // slideImage.appendChild(slideObject.download_url);
            
        }
    }
}
// fetch a random Image
//     credit author    
//     Download
// Query an Image
//     credit author   
//     Download
// Adjust an Image
//     grayscale and blur
//     download

