// ���������, ���������� �� ������� � id "calc-app"
const container = document.getElementById('calc-app');

// ���� ������� ����������, �� �������� React � ����
if (container) {
    console.log("yep");
    const element = React.createElement('h1', null, 'Hello, world!');
    ReactDOM.render(element, container);
}