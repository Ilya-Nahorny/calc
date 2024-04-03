// Проверяем, существует ли элемент с id "calc-app"
const container = document.getElementById('calc-app');

// Если элемент существует, то рендерим React в него
if (container) {
    console.log("yep");
    const element = React.createElement('h1', null, 'Hello, world!');
    ReactDOM.render(element, container);
}