// protocol + domain name + path +query parameter
// GET=read, POST=create, PUT=Update ,DELETE=delete

let searchInputElement=document.getElementById("searchInput");
let searchResultsElement=document.getElementById("searchResults");
let spinnerElement=document.getElementById("spinner");

function createAndAppendSearch(results){
    let {link,title,description} =results;
    // create Result Item

    let resultElement=document.createElement("div");
    resultElement.classList.add("result-item")
    searchResultsElement.appendChild(resultElement);
    // creating Title
    
    let titleElement=document.createElement("a");
    titleElement.href=link;
    titleElement.target="_blank";
    titleElement.textContent=title;
    titleElement.classList.add("result-title");
    resultElement.appendChild(titleElement);
    //creating break element
    let titlebreakElement=document.createElement("br");
    resultElement.appendChild(titlebreakElement);
    //create the URL element 
    let urlElement=document.createElement("a");
    urlElement.href=link;
    urlElement.target="_blank";
    urlElement.textContent=link;
    urlElement.classList.add("result-url");
    resultElement.appendChild(urlElement);
    //creating break element
    let lineBreakElement=document.createElement("br");
    resultElement.appendChild(lineBreakElement);
    // create Description Element
    let descriptionElement=document.createElement('p');
    descriptionElement.classList.add("link-description");
    descriptionElement.textContent=description;
    resultElement.appendChild(descriptionElement);
}

function displayResults(searchResults){
    spinnerElement.classList.add('d-none');
    for(let result of searchResults){
    createAndAppendSearch(result);}
}
function Search(event){
    if(event.key==="Enter"){
        spinnerElement.classList.remove('d-none');
        searchResultsElement.textContent="";
        let inputElement=searchInputElement.value;
        let url="https://apis.ccbp.in/wiki-search?search="+inputElement;

    let options={
        method:"GET"
    };

    //geting the response from the url
    fetch(url,options)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        let {search_results}=jsonData;
        displayResults(search_results);
        
    });
    }
}

searchInputElement.addEventListener("keydown",Search);