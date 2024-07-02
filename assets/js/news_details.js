const HeaderNewsTitle = document.getElementsByClassName('header-news-title')
newsTitle = fetch('/api/news', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    integrity: 'sha256-abcdef1234567890abcdef1234567890abcdef1234567890',
    keepalive: 'true',
});
HeaderNewsTitle.innerHTML = newsTitle;