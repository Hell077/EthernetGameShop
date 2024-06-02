//CatalogList.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './CatalogList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function CatalogList() {
    const [catalog, setCatalog] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const login = useSelector((state) => state.login.login);

    useEffect(() => {
        fetchCatalog();
    }, []);

    const fetchCatalog = async () => {
        try {
            const response = await fetch('http://localhost:3000/catalog');
            const data = await response.json();
            setCatalog(data);
        } catch (error) {
            console.error('Ошибка при получении каталога:', error);
        }
    };

    const handleSearch = () => {
        if (searchTerm === '') {
            fetchCatalog();
        }
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        fetchCatalog();
    };

    const handleAddToCart = async (productId, productName, price) => {
        try {
            const response = await fetch('http://localhost:3000/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, productName, price, login, quantity: 1 }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Товар успешно добавлен в корзину:', data);
            } else {
                console.error('Ошибка при добавлении товара в корзину:', data);
            }
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
        }
    };

    const filteredCatalog = catalog.filter(item =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={style.main}>
            <div className={style.filter}>
            </div>
            <div className={style.catalog}>
                <div className={style.inputBox}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
                    </button>
                    {searchTerm && (
                        <button onClick={handleClearSearch}>
                            <FontAwesomeIcon icon={faTimesCircle} size="2xl" />
                        </button>
                    )}
                </div>
                <div className={style.catalogList}>
                    {filteredCatalog.map(item => (
                        <div key={item._id} className={style.catalogItem}>
                            <img src={item.ImageLink} alt={item.Name} />
                            <p>{item.Name}</p>
                            <p>{item.Title}</p>
                            <p>{item.Price} руб.</p>
                            <button onClick={() => handleAddToCart(item._id, item.Name, item.Price)}>
                                Добавить в корзину
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CatalogList;
