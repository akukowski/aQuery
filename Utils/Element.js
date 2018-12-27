export function findElements(selector) {

    return Array.from( document.querySelectorAll(selector) )

}

export function createElement(htmlTag) {

    let results = (/<(.+)>/).exec(htmlTag);
    
    if(results && results[0]) {
        return document.createElement(results[1]);
    } else {
        throw new Error("Nieprawidłowy tag HTML");
    }

}