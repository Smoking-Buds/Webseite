const lang = document.location.search.substring(0, document.location.search);
const url = () => resizeByUrl(document.location.search.substring(document.location.search));

function resizeByUrl(search, newSearch) {
    const urlParams = new URLSearchParams(search);
    urlParams.set('lang', newSearch);
    return `${document.location.protocol}//${document.location.hostname}${document.location.pathname}?${urlParams.toString()}`;
}