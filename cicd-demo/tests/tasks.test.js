const { addTask, toggleTask, removeTask, stats } = require('../src/tasks');

describe('Pruebas unitarias: tasks', () => {
  test('addTask agrega una tarea', () => {
    const list = addTask([], 'Estudiar CI/CD');
    expect(list).toHaveLength(1);
    expect(list[0]).toMatchObject({ text: 'Estudiar CI/CD', done: false });
  });

  test('addTask rechaza texto vacío', () => {
    expect(() => addTask([], '   ')).toThrow('vacío');
    expect(() => addTask([], undefined)).toThrow();
  });

  test('toggleTask alterna el estado', () => {
    const list = addTask([], 'A');
    const toggled = toggleTask(list, list[0].id);
    expect(toggled[0].done).toBe(true);
    expect(toggleTask(toggled, toggled[0].id)[0].done).toBe(false);
  });

  test('toggleTask ignora ids inexistentes', () => {
    const list = addTask([], 'A');
    expect(toggleTask(list, 999)).toEqual(list);
  });

  test('removeTask elimina por id', () => {
    const list = addTask(addTask([], 'A'), 'B');
    expect(removeTask(list, list[0].id)).toHaveLength(1);
  });

  test('stats calcula totales', () => {
    let list = addTask(addTask([], 'A'), 'B');
    list = toggleTask(list, list[0].id);
    expect(stats(list)).toEqual({ total: 2, done: 1, pending: 1 });
  });
});
