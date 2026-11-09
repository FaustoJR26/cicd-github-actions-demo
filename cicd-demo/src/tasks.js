(function (root) {
  let nextId = 1;

  function addTask(list, text) {
    const clean = (text || '').trim();
    if (!clean) throw new Error('El texto de la tarea no puede estar vacío');
    return [...list, { id: nextId++, text: clean, done: false }];
  }

  function toggleTask(list, id) {
    return list.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  }

  function removeTask(list, id) {
    return list.filter((t) => t.id !== id);
  }

  function stats(list) {
    const done = list.filter((t) => t.done).length;
    return { total: list.length, done, pending: list.length - done };
  }

  const api = { addTask, toggleTask, removeTask, stats };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Tasks = api;
})(typeof window !== 'undefined' ? window : globalThis);
