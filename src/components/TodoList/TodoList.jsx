import { useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.scss'

const TodoList = props => {

    const {todos, searchParam, refreshList} = props;
    
    const filteredTodos = todos.filter(t => {
        return t.toLowerCase().indexOf(searchParam.toLowerCase())+1;
    });

    const noRecordMessage = searchParam.length ? 'No Matching Tasks' : 'No Tasks Found'

    return (
        <div className={classes.list_wrapper}>
            <ul className={classes.list}>
                {filteredTodos.length ? filteredTodos.map((item,index) => (
                    <TodoItem todo={item} index={index} refreshList={refreshList} key={index} />
                )) : <li className={classes.no_record}>{noRecordMessage}</li>}
            </ul>
        </div>
    )
}

export default TodoList;