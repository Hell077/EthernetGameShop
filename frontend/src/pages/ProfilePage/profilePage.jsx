import React, { useState, useEffect } from 'react';
import Header from "../../modules/Header/header.jsx";
import Aside from "../../modules/Aside/Aside.jsx";
import Cart from '../../modules/Cart/Cart.jsx';
import MyKey from "../../modules/MyKey/myKey.jsx";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "../../modules/Admin/admin.jsx";
import { useSelector } from "react-redux";
import LoginPage from '../LoginPage/LoginPage.jsx';

function ProfilePage() {
    const [activeComponent, setActiveComponent] = useState('cart');
    const login = useSelector((state) => state.login.login);

    useEffect(() => {
        const savedComponent = localStorage.getItem('activeComponent');
        if (savedComponent) {
            setActiveComponent(savedComponent);
        }
    }, []);

    const handleSetActiveComponent = (component) => {
        setActiveComponent(component);
        localStorage.setItem('activeComponent', component);
    };

    return (
        <>
            {login ? (
                <>
                    <Header />
                    <Aside setActiveComponent={handleSetActiveComponent} />
                    {activeComponent === 'cart' && <Cart key="cart" />}
                    {activeComponent === 'myKey' && <MyKey key="myKey" />}
                    {activeComponent === 'Admin' && <Admin key="Admin" />}
                </>
            ) : (
                <>
                    <LoginPage />
                </>
            )}
        </>
    );
}

export default ProfilePage;
