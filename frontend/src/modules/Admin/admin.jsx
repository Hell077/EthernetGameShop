import React, { useState } from 'react';
import style from './Main.module.css'
import CatalogAdmin from "./Folders/Catalog/catalogAdmin.jsx";
import Carts from "./Folders/Carts/Carts.jsx";
import Keys from "./Folders/Keys/keys.jsx";
import Users from "./Folders/Users/Users.jsx";

const Admin = () => {
    const [activeComponent, setActiveComponent] = useState(1);

    const renderComponent = () => {
        switch (activeComponent) {
            case 1:
                return <CatalogAdmin />;
            case 2:
                return <Users/>;
            case 3:
                return <Keys/>;
            case 4:
                return  <Carts/>;
            default:
                return null;
        }
    };

    const handleComponentChange = (componentNumber) => {
        setActiveComponent(componentNumber);
    };

    return (
        <div>
            {renderComponent()}
            <div className={style.container}>
                <button onClick={() => handleComponentChange(1)}>Каталог</button>
                <button onClick={() => handleComponentChange(2)}>Пользователи</button>
                <button onClick={() => handleComponentChange(3)}>Список всех ключей</button>
                <button onClick={() => handleComponentChange(4)}>Список всех корзин</button>
            </div>
        </div>
    );
};

export default Admin;
