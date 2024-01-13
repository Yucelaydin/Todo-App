import classes from './TodoItem.module.scss'
import { MdDelete } from "react-icons/md";



const TodoItem = props => {
    const {todo, index, refreshList} = props;

    const handleDelete = (id) => {
        if(confirm('Do you want to delete this task?')) {
            let list = JSON.parse(localStorage.getItem('todo-list'));
            list = list.filter((_, i) => {
                return i != id;
            })
            localStorage.setItem('todo-list', JSON.stringify(list));
            refreshList();
        }
    }

    return (
        <li className={classes.item}>
            {todo}
            <MdDelete className={classes.button} onClick={() => handleDelete(index)}/>
        </li>
    )
}

export default TodoItem;