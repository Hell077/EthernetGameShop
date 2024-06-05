import React, { useEffect, useState } from "react";
import style from "./Catalog.module.css";
import AddItemFrom from "../../Modules/AddItemFrom.jsx";

function CatalogAdmin() {
    const [catalogData, setCatalogData] = useState([]);
    const [editData, setEditData] = useState({ _id: '', Name: '', ImageLink: '', Price: 0, Tags: [], Title: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/api/catalog')
            .then(response => response.json())
            .then(data => setCatalogData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleEditClick = (item) => {
        setEditData(item);
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'Tags') {
            setEditData({ ...editData, Tags: value.split(',').map(tag => tag.trim()) });
        } else {
            setEditData({ ...editData, [name]: value });
        }
    };

    const handleUpdateClick = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/UpdateCatalog', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editData),
            });
            const data = await response.json();
            console.log('Updated data:', data);
            setIsEditing(false);

            fetchData();

            setCatalogData(prevData => prevData.map(item => (item._id === editData._id ? data : item)));
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/catalog');
            const data = await response.json();
            setCatalogData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className={style.adminContainer}>
                <h1 className={style.adminTitle}>Admin Panel</h1>
                <AddItemFrom />
                <div className="tableWrapper">
                    <table className={style.catalogTable}>
                        <thead>
                        <tr>
                            <th>Фото</th>
                            <th>ID</th>
                            <th>Имя</th>
                            <th className="ImageLinkColumn">Ссылка на изображение</th>
                            <th>Цена</th>
                            <th>Теги</th>
                            <th>Описание</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {catalogData.map(item => (
                            <tr key={item._id}>
                                <td><img src={item.ImageLink} alt={item.Name} className={style.image}/></td>
                                <td>{item._id}</td>
                                <td>{isEditing && editData._id === item._id ? (
                                    <input type="text" name="Name" value={editData.Name} onChange={handleInputChange}/>
                                ) : item.Name}</td>
                                <td className="ImageLinkColumn">
                                    {isEditing && editData._id === item._id ? (
                                        <input type="text" name="ImageLink" value={editData.ImageLink}
                                               onChange={handleInputChange}/>
                                    ) : item.ImageLink}
                                </td>
                                <td>
                                    {isEditing && editData._id === item._id ? (
                                        <input type="number" name="Price" value={editData.Price}
                                               onChange={handleInputChange}/>
                                    ) : item.Price}
                                </td>
                                <td>
                                    {isEditing && editData._id === item._id ? (
                                        <input
                                            type="text"
                                            name="Tags"
                                            value={Array.isArray(editData.Tags) ? editData.Tags.join(', ') : ''}
                                            onChange={handleInputChange}
                                        />
                                    ) : Array.isArray(item.Tags) ? item.Tags.join(', ') : ''}
                                </td>
                                <td>
                                    {isEditing && editData._id === item._id ? (
                                        <textarea
                                            type="text"
                                            name="Title"
                                            value={editData.Title}
                                            onChange={handleInputChange}
                                            style={{maxHeight: '300px'}} // Установка максимальной высоты
                                        />
                                    ) : item.Title}
                                </td>

                                <td>
                                    {isEditing && editData._id === item._id ? (
                                        <button onClick={handleUpdateClick} className={style.button}>Сохранить</button>
                                    ) : (
                                        <button onClick={() => handleEditClick(item)}
                                                className={style.button}>Редактировать</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}

export default CatalogAdmin;
