export function addConsoleDOM(message) {

    const element = document.createElement('span');
    element.className = 'comment';
    element.textContent = message;
    element.style.color = "white";
    element.style.backgroundColor = "brown"
    document.getElementById('consoleDisplay').appendChild(element);
}