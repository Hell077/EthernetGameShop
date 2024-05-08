import style from './selectCategory.module.css';

function CategoryItems(props) {
    return (
        <>
            <button className={style.CategoryButton} style={{ backgroundColor: props.backColor }}>
                <img className={style.icon} src={props.icon} alt="" />
                <p className={style.p}>{props.title}</p>
            </button>
        </>

    );
}

export default CategoryItems;
