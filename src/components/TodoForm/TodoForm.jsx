import { useRef, useState } from 'react';
import classes from './TodoForm.module.scss'
import { SiAddthis } from "react-icons/si";


const TodoForm = props => {
  const [buttonClass, setButtonClass] = useState(`${classes.button}`);
  const taskInput = useRef(null);
  const {refreshList} = props;
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    if(event.target.value.length) 
      setButtonClass(`${classes.button} ${classes.active}`);
    else
      setButtonClass(`${classes.button}`);
  }

  const addTask = () => {
    let list = JSON.parse(localStorage.getItem('todo-list'));
    list.push(taskInput.current.value);
    localStorage.setItem('todo-list', JSON.stringify(list));
    taskInput.current.value = '';
    refreshList();
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.row}>
        <input type='text' className={classes.input} onChange={handleChange} ref={taskInput}/>
        <SiAddthis className={buttonClass} onClick={addTask}/>
      </div>
    </form>
  )
}

export default TodoForm;