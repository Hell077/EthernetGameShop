import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import FilterCheckBox from '../../modules/FilterCheckBox/filterCheckBox.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './CatalogList.module.css';

function CatalogList() {
    const [catalog, setCatalog] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);
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
            toast.error('Ошибка при получении каталога');
        }
    };

    const handleSearch = () => {
        if (searchTerm !== '') {
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
                toast.success('Товар успешно добавлен в корзину');
            } else {
                toast.error('Ошибка при добавлении товара в корзину');
            }
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
        }
    };

    const handleFilterChange = (filter) => {
        setSelectedFilters((prevSelectedFilters) =>
            prevSelectedFilters.includes(filter)
                ? prevSelectedFilters.filter((f) => f !== filter)
                : [...prevSelectedFilters, filter]
        );
    };

    const filteredCatalog = catalog.filter((item) => {
        const matchesSearchTerm = item.Name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilters =
            selectedFilters.length === 0 || selectedFilters.every((filter) => item.Tags.includes(filter));
        return matchesSearchTerm && matchesFilters;
    });

    return (
        <>
            <ToastContainer autoClose={2000} style={{ bottom: "0", right: '20px', zIndex: 9999, pointerEvents: 'none' }} toastStyle={{ pointerEvents: 'auto' }} />
            <div className={style.main}>
                <div className={style.filter}>
                    <h1>Фильтр поиска</h1>
                    <div className={style.block}>
                        {[
                            'Шутер',
                            'MOBA',
                            'RPG',
                            'Экшн',
                            'Приключения',
                            'Симулятор',
                            'Головоломка',
                            'Стратегия',
                            'Для одного игрока',
                            'Кооператив',
                            'Фэнтези',
                            'Выживание',
                            'Хоррор',
                            'Гонки',
                            'Реализм',
                            'Открытый мир',
                        ].map((filter) => (
                            <FilterCheckBox key={filter} text={filter} onChange={() => handleFilterChange(filter)} />
                        ))}
                    </div>
                </div>
                <div className={style.catalog}>
                    <div className={style.inputBox}>
                        <input
                            type="text"
                            placeholder="Поиск..."
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
                        {filteredCatalog.map((item) => (
                            <div key={item._id} className={style.catalogItem}>
                                <Link to={`/catalog/${item._id}`} className={style.link}>
                                    <img src={item.ImageLink} alt={item.Name} />
                                    <p className={style.center}>{item.Name}</p>
                                    <p className={style.center}>{item.Title}</p>
                                    <p className={style.center}>{item.Price} руб.</p>
                                    <div className={style.tags}>
                                        {Array.isArray(item.Tags) && item.Tags.map((tag, index) => (
                                            <span key={index} className={style.tag}>#{tag}</span>
                                        ))}
                                    </div>
                                </Link>
                                <button onClick={() => handleAddToCart(item._id, item.Name, item.Price)}>
                                    Добавить в корзину
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogList;
