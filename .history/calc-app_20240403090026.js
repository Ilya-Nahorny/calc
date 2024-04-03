const container = document.getElementById('calc-app');

if (container) {
    console.log("yep");
    const element = React.createElement('h1', null, 'Hello, world!');
    ReactDOM.render(element, container);
}