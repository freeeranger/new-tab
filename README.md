# new-tab
A simple new-tab page showing the user's bookmarks (more specifically the ones in the bookmark bar) in a way that resembles the `tree` command

## Installation
0. Clone the repo: `git clone https://github.com/freeeranger/new-tab.git`

### Firefox
1. Make sure you're using firefox developer edition / nightly / esr
2. Go to `about:config`, set `xpinstall.signatures.required` to `false` in order to allow unverified extensions
3. Build the extension using `web-ext build` (requires [web-ext](https://github.com/mozilla/web-ext))
4. Go to `about:addons` and drag in the exported zip file

### Chrome
1. Go to `chrome://extensions` and enable developer mode
2. Click on the **load unpacked** button  and drag in the entire folder
