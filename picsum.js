const baseUrl1 = 'https://picsum.photos/v2/list?page=1&limit=1000'

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
        console.log("json.length");
        let photoObject = json[randomValue];
        document.getElementById("randomImage").src = photoObject.download_url;
        document.getElementById("author").textContent = photoObject.author;
        document.getElementById("url").textContent = photoObject.url;
        document.getElementById("url").href = photoObject.url;
    }

}
function displaySlide(json) {

    if (json.length === 0) {
        console.log("No Results");
    } else {
        //set for loop to cycle "3" times for 3 different carousel images
        for (let i = 0; i < 3; i++) {
            let randomValueSlide = Math.floor(Math.random() * (json.length - 0) + 0);
            let slideObject = json[randomValueSlide];
            document.getElementsByClassName(`image${i}`)[0].src = json[randomValueSlide].download_url;
            console.log(json[randomValueSlide].download_url);
            console.log(json.length);
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

