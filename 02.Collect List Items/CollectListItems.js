function extractText() {
    document.querySelector('textarea').textContent = [...document.querySelectorAll('li')]
        .map(x => x.textContent).join('\n')
}