document.addEventListener('DOMContentLoaded', () => {
    let tree = document.getElementById("root");

    function addElements(child, parent) {
        let el = document.createElement("li");

        let elName = child.title.toLowerCase().replace(" ", "-");

        if (child.type === "folder") {
            let nameEl = document.createElement("span");
            nameEl.textContent = elName;
            el.appendChild(nameEl);

            let listEl = document.createElement("ul");
            child.children.forEach(temp => {
                addElements(temp, listEl);
            });
            el.appendChild(listEl);
        } else if (child.type === "bookmark") {
            let linkEl = document.createElement("a");
            linkEl.textContent = elName;
            linkEl.href = child.url;
            el.appendChild(linkEl);
        }

        parent.appendChild(el);
    }

    browser.bookmarks.getTree().then(subjects => {
        let root = subjects[0].children[1].children;

        root.forEach(child => {
            addElements(child, tree);
        });
    });
});
