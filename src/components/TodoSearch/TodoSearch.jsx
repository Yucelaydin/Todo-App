import classes from './TodoSearch.module.scss'

const TodoSearch = props => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSearch = (event) => {
    props.setSearchParam(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input type='text' className={classes.input} onChange={handleSearch}/>
    </form>
  )
}

export default TodoSearch;