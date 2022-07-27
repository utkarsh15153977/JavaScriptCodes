let btn = document.querySelector('button');

//DOM --> Document Object Model

//document is used for upload DOM in JS file
// querySelector is used to select any element in html
//Elements are the objects in DOM 
//Document is all the HTML files 
//Model is the whole model which is creating (Whole HTML, CSS and JavaScript)

/*
The Document Object Model (DOM) is an application programming interface (API) 
for HTML and XML documents. It defines the logical structure of documents and 
the way a document is accessed and manipulated.
*/
btn.addEventListener('click', showMSG);

function showMSG() {
    alert("Button Clicked");
}
