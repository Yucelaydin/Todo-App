import { useEffect, useState } from 'react'
import classes from './App.module.scss'
import TodoSearch from './components/TodoSearch/TodoSearch'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import ThemePicker from './components/ThemePicker/ThemePicker'

const App = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todo-list')) || []);
  const [searchParam, setSearchParam] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const refreshList = ()=>{
    setTodoList(JSON.parse(localStorage.getItem('todo-list')));
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <main className={classes.main}>
      <ThemePicker setTheme={setTheme}/>
      <div className={classes.main__wrapper}>
        <TodoSearch setSearchParam={setSearchParam} />
        <TodoList todos={todoList} searchParam={searchParam} refreshList={refreshList}/>
        <TodoForm refreshList={refreshList} />
      </div>
    </main>
  )
}

export default App;