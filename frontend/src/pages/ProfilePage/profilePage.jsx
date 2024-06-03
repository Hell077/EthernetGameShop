import { useState } from 'react';
import Header from "../../modules/Header/header.jsx";
import Aside from "../../modules/Aside/Aside.jsx";
import Cart from '../../modules/Cart/Cart.jsx';
import MyKey from "../../modules/MyKey/myKey.jsx";

function ProfilePage() {
    const [activeComponent, setActiveComponent] = useState('cart'); // 'cart' или 'myKey'

    return (
        <>
            <Header />
            <Aside setActiveComponent={setActiveComponent} />
            {activeComponent === 'cart' && <Cart />}
            {activeComponent === 'myKey' && <MyKey />}
        </>
    );
}

export default ProfilePage;
