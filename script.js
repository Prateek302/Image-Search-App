
const accesskey ="Z1G3XZm07taM10Cwggp7229d2tZN0fQ95pxnNGq_Pic";
const searchForm = document.getElementById("search-form");
const searchBox= document.getElementById("search-box");
const searchResult= document.getElementById("search-result");
const showMoreBtn= document.getElementById("show-more-btn");


let keyword =" ";
let page= 1;

async function searchImages(){

    keyword = searchBox.value;
     console.log(keyword);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=Z1G3XZm07taM10Cwggp7229d2tZN0fQ95pxnNGq_Pic`;
    
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

     ///mapping the images

     const results = data.results;

     results.map((result)=>{
        // create img tag
        const image= document.createElement("img");
        // image ke src me jo json me aaya h uska small size ka url 
        image.src = result.urls.small;

        // crete anchor tag to redirect when person click on image and goto unsplash website

        const imageLink = document.createElement("a");
        // anchor tag e href me link aajaye
        imageLink.href = result.links.html;
        imageLink.target ="_blank";

// Ab img tag bn gya or anchor tag bn gya alag alag 
// ab anchor tag ke andar img tag ko lana h aise <a href=""><img src=""></a>
        imageLink.appendChild(image);


        // ab serachResult div me show krdo
        searchResult.appendChild(imageLink);

     })


}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});
    
