import { useState } from 'react';
import style from './topGamesList.module.css';
import Button from './button/button';
import List from './list/list';

function TopGameList() {
    const [selectedNewsType, setSelectedNewsType] = useState('Новинки');

    const handleNewsTypeChange = (type) => {
        setSelectedNewsType(type);
    };

    return (
        <>
            <div className={style.TopGameList}>
                <div className={style.ParentContainer}>
                    <div className={style.buttonsContainer}>
                        <Button onClick={() => handleNewsTypeChange('Новинки')} title='Новинки' />
                        <Button onClick={() => handleNewsTypeChange('Лидеры продаж')} title='Лидеры продаж' />
                    </div>
                    <div className={style.list}>
                        <List selectedNewsType={selectedNewsType} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopGameList;
