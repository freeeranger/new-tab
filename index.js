document.addEventListener("DOMContentLoaded", () => {
    let rootEl = document.getElementById("root");

    function addElements(child, parent) {
        let el = document.createElement("li");

        let elName = child.title.toLowerCase().replace(" ", "-"); // Terminal-style element name

        if (child.type === "folder") {
            // Create the directory element
            let nameEl = document.createElement("span");
            nameEl.textContent = elName;
            let listEl = document.createElement("ul");
            el.appendChild(nameEl);
            el.appendChild(listEl);

            // Run addElements on each child
            child.children.forEach((temp) => {
                addElements(temp, listEl);
            });
        } else if (child.type === "bookmark") {
            // Create the link element
            let linkEl = document.createElement("a");
            linkEl.textContent = elName;
            linkEl.href = child.url;
            el.appendChild(linkEl);
        }

        parent.appendChild(el);
    }

    // Run addElements on each element in the bookmark bar
    browser.bookmarks.getTree().then((subjects) => {
        subjects[0].children[1].children.forEach((child) => {
            addElements(child, rootEl);
        });
    });

    // Filtering feature
    document.addEventListener("keydown", (event) => {
        console.log(event.key);
    });
});
