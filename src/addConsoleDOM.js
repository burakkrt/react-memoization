export function addConsoleDOM(message, color = "black") {

    const element = document.createElement('span');
    element.className = 'comment';
    element.textContent = message;
    element.style.color = color;
    document.getElementById('consoleDisplay').appendChild(element);
}