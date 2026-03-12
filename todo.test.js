const TodoList = require('./todo');

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('should add a new todo', () => {
    const todo = todoList.addTodo('Acheter du pain');
    expect(todo.title).toBe('Acheter du pain');
    expect(todo.completed).toBe(false);
    expect(todoList.getTodos()).toHaveLength(1);
  });

  test('should throw error on empty title', () => {
    expect(() => todoList.addTodo('')).toThrow('Title cannot be empty');
    expect(() => todoList.addTodo('   ')).toThrow('Title cannot be empty');
  });

  test('should complete a todo', () => {
    const todo = todoList.addTodo('Faire les courses');
    todoList.completeTodo(todo.id);
    expect(todo.completed).toBe(true);
  });

  test('should delete a todo', () => {
    const todo = todoList.addTodo('Appeler Marie');
    todoList.deleteTodo(todo.id);
    expect(todoList.getTodos()).toHaveLength(0);
  });

  // 5ème test : vérifier que getTodos retourne bien la liste
  test('should return all todos', () => {
    todoList.addTodo('Tâche 1');
    todoList.addTodo('Tâche 2');
    const todos = todoList.getTodos();
    expect(todos).toHaveLength(2);
    expect(todos[0].title).toBe('Tâche 1');
    expect(todos[1].title).toBe('Tâche 2');
  });
});