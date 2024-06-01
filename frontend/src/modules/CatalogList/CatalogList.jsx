import style from './CatalogList.module.css'


function CatalogList(){
    return(
    <>
        <div className={style.Search}>
            <input type="text"/>
        </div>
        <div className={style.CatalogList}></div>
    </>
    );
}

export default CatalogList