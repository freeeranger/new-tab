document.addEventListener('DOMContentLoaded', () => {
    let tree = document.getElementById("root");

    function createBookmarkItem(bookmark) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = bookmark.url;
        a.textContent = bookmark.title || bookmark.url;
        li.appendChild(a);
        return li;
    }

    function displayBookmarks(bookmarks, parentElement) {
        bookmarks.forEach((bookmark) => {
            if (bookmark.url) {
                parentElement.appendChild(createBookmarkItem(bookmark));
            } else {
                let folderLi = document.createElement("li");
                folderLi.textContent = bookmark.title;

                let sublist = document.createElement("ul");
                folderLi.appendChild(sublist);

                parentElement.appendChild(folderLi);

                displayBookmarks(bookmark.children, sublist);
            }
        });
    }

    browser.bookmarks.getTree().then(subjects => {
        subjects[0].children[1].children.forEach((child) => {
            if (child.type === "folder") {
                let title = document.createElement("p");
                title.textContent = child.title;
                title.classList.add("title");
                tree.appendChild(title);
                displayBookmarks(child.children, title);
            }
        });
    });
});
