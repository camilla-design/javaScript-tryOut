// DOM selectors

console.dir(document.querySelector("hi"));

const heading2 = document.querySelector("h2");
console.dir(heading2);

const headingByClass = document.querySelector(".heading2");
console.dir(headingByClass);

const list = document.querySelector("#list");
console.dir(list);

const listItem = document.querySelector("li");
console.dir(listItem);

const listItems = document.querySelectorAll("li");
console.dir(listItems);

for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i]);
}

for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i].innerText);
}

// Manipulating the elements

const heading1 = document.querySelector("h1")
heading1.style.color = "purple";

heading1.style.border = "1px solid green";
heading1.style.backgroundColor = "yellow";
heading1.style.padding = "1em";

// className and classList

const div = document.querySelector("div");
console.log(div.className);

div.classList.add("container");
console.log(div.className);

div.classList.add("second-class");
console.log(div.className);

// innerText

const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Updated using innerText";

const allTheListItems = document.querySelectorAll("li");
for(let i =0; i < allTheListItems.length; i++) {
    allTheListItems[i].innertext = i + "changed";
}

// innerHTML


const container = document.querySelector("div");
container.innerHTML = `<p>
                        <b>Bold text:</b> unbolded text
                    </p>`;

                    





