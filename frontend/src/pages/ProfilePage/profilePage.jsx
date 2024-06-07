import { useState, useEffect } from 'react';
import Header from "../../modules/Header/header.jsx";
import Aside from "../../modules/Aside/Aside.jsx";
import Cart from '../../modules/Cart/Cart.jsx';
import MyKey from "../../modules/MyKey/myKey.jsx";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "../../modules/Admin/admin.jsx";

function ProfilePage() {
    const [activeComponent, setActiveComponent] = useState('cart');

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
            <Header />
            <Aside setActiveComponent={handleSetActiveComponent} />
            {activeComponent === 'cart' && <Cart />}
            {activeComponent === 'myKey' && <MyKey />}
            {activeComponent === 'Admin' && <Admin />}
        </>
    );
}

export default ProfilePage;
