const fs = require('fs');
const path = require('path');
const { initApp } = require('../src/main');

function loadDom() {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  document.body.innerHTML = html.match(/<body>([\s\S]*)<\/body>/)[1].replace(/<script[\s\S]*?<\/script>/g, '');
  initApp(document);
}

function addViaUI(text) {
  document.getElementById('task-input').value = text;
  document.getElementById('task-form').dispatchEvent(new Event('submit', { cancelable: true }));
}

describe('Pruebas de integración: UI + lógica', () => {
  beforeEach(loadDom);

  test('agrega una tarea desde el formulario', () => {
    addViaUI('Hacer el pipeline');
    expect(document.querySelectorAll('#task-list li')).toHaveLength(1);
    expect(document.getElementById('stats').textContent).toContain('1 tareas');
  });

  test('muestra error con tarea vacía', () => {
    addViaUI('  ');
    expect(document.getElementById('stats').textContent).toContain('vacío');
  });

  test('completa una tarea al hacer clic', () => {
    addViaUI('Probar');
    document.querySelector('#task-list li span').click();
    expect(document.querySelector('#task-list li').className).toBe('done');
    expect(document.getElementById('stats').textContent).toContain('1 completadas');
  });

  test('elimina una tarea', () => {
    addViaUI('Borrar');
    document.querySelector('#task-list li button').click();
    expect(document.querySelectorAll('#task-list li')).toHaveLength(0);
  });
});
