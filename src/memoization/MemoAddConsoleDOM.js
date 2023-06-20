export function MemoAddConsoleDOM(message) {

    const element = document.createElement('span');
    element.className = 'comment';
    element.textContent = message;
    element.style.backgroundColor = "green";
    element.style.color = "white"
    document.getElementById('consoleDisplay').appendChild(element);
}