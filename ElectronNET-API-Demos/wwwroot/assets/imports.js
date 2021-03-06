// copy from https://github.com/electron/electron-api-demos/pull/466/

function includeHTML() {
    var links, i, elmnt, href, request;
    /* Loop through a collection of all HTML elements: */
    links = document.querySelectorAll('link[rel="import"]');
    // console.log(links)
    for (i = 0; i < links.length; i++) {
        elmnt = links[i];
        /*search for elements with a certain atrribute:*/
        href = elmnt.getAttribute('href');
        // console.log(href)
        if (href) {
            /* Make an HTTP request using the attribute value as the file name: */
            request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    // console.log(elmnt)                // <link ref="import" href="sections/windows/crash-hang.html">
                    let template = elmnt.querySelector('.task-template')
                    let clone = document.importNode(template.content, true)
                    if (href.match('about')) {
                        document.querySelector('body').appendChild(clone)
                    } else {
                        document.querySelector('.content').appendChild(clone)
                    }
                    elmnt.remove();
                    includeHTML();
                }
            }
            request.open("GET", href, false); // `false` makes the request synchronous
            request.send();
            /* Exit the function: */
            return;
        }
    }
}
includeHTML();