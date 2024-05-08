import style from './selectCategory.module.css'
import CategoryItems from './categoryItem';


function SelectCategory() {
    return (
        <>
            <p className={style.CenterP}>Категории игр</p>
            <div className={style.Container}>
                <div className={style.category}>
                    <CategoryItems title="Шутер" icon={''} />
                    <CategoryItems title="MOBA" icon={''} />
                    <CategoryItems title="Rpg" icon={''} />
                    <CategoryItems title="Экшн" icon={''} />
                    <CategoryItems title="Приключение" icon={''} />
                    <CategoryItems title="Симулятор" icon={''} />
                    <CategoryItems title="Головоломка" icon={''} />
                    <CategoryItems title="Стратегия" icon={''} />
                </div>
            </div>
        </>
    );
}

export default SelectCategory;