
let submitButtonElement = document.getElementById("submitBtn"); 
let nameElement = document.getElementById("siteNameInput");
let urlElement = document.getElementById("siteUrlInput");
let nameErrElement = document.getElementById("siteNameErrMsg");
let urlErrElement = document.getElementById("siteUrlErrMsg");
let formElement = document.getElementById("bookmarkForm");
nameElement.addEventListener("change", function() {
    if (nameElement.value === "") {
        nameErrElement.textContent = "Required*";
    } else {
        nameErrElement.textContent = "";
    }
});

urlElement.addEventListener("change", function() {
    if (urlElement.value === "") {
        urlErrElement.textContent = "Required*";
    } else {
        urlErrElement.textContent = "";
    }
});
formElement.addEventListener("submit", function(event) {
    event.preventDefault();
});
submitButtonElement.addEventListener("click", function(event) {
    event.preventDefault();
    if (nameElement.value === "" || urlElement.value === "") {
        if (nameElement.value === "") {
            nameErrElement.textContent = "Required*";
        }
        if (urlElement.value === "") {
            urlErrElement.textContent = "Required*";
        }
    } else {
        let listElement = document.getElementById("bookmarksList");
        listElement.classList.add("site-container");
        listElement.style = "list-style:none";
        let itemElement = document.createElement("li");
        listElement.appendChild(itemElement);
        let siteElement = document.createElement("h1");
        siteElement.classList.add("site-name");
        itemElement.appendChild(siteElement);
        let siteUrlElement = document.createElement("a");

        itemElement.appendChild(siteUrlElement);
        siteElement.textContent = nameElement.value;
        siteUrlElement.textContent = urlElement.value;
        siteUrlElement.href = urlElement.value;
        siteUrlElement.target = "_blank";
    }
});
