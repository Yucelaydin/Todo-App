import classes from './ThemePicker.module.scss'

const THEMES = ['light','dark','rose'];

const ThemePicker = (props) => {


    return (
        <div className={classes.picker}>
            {THEMES.map((t,i) => (
                <div className={`${classes.picker__option} ${classes[t]}`} onClick={()=>{props.setTheme(t)}} key={i}></div>
            ))}
        </div>
    )
}

export default ThemePicker;