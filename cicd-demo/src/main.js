(function (root) {
  const isNode = typeof module !== 'undefined' && module.exports;
  const Tasks = isNode ? require('./tasks') : root.Tasks;

  function initApp(doc) {
    let list = [];
    const form = doc.getElementById('task-form');
    const input = doc.getElementById('task-input');
    const ul = doc.getElementById('task-list');
    const statsEl = doc.getElementById('stats');

    function render() {
      ul.innerHTML = '';
      list.forEach((t) => {
        const li = doc.createElement('li');
        if (t.done) li.className = 'done';
        const span = doc.createElement('span');
        span.textContent = t.text;
        span.addEventListener('click', () => { list = Tasks.toggleTask(list, t.id); render(); });
        const del = doc.createElement('button');
        del.textContent = 'Eliminar';
        del.addEventListener('click', () => { list = Tasks.removeTask(list, t.id); render(); });
        li.append(span, ' ', del);
        ul.appendChild(li);
      });
      const s = Tasks.stats(list);
      statsEl.textContent = `${s.total} tareas (${s.done} completadas, ${s.pending} pendientes)`;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      try {
        list = Tasks.addTask(list, input.value);
        input.value = '';
        render();
      } catch (err) {
        statsEl.textContent = err.message;
      }
    });

    render();
  }

  if (isNode) module.exports = { initApp };
  else root.addEventListener('DOMContentLoaded', () => initApp(root.document));
})(typeof window !== 'undefined' ? window : globalThis);
