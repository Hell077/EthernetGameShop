import React, {useEffect, useState} from "react";
import style from "./Catalog.module.css";
import AddItemFrom from "../../Modules/AddItemFrom.jsx";


function CatalogAdmin(){

    const [catalogData, setCatalogData] = useState([]);
    const [editData, setEditData] = useState({_id: '', Name: '', ImageLink: '', Price: 0, Tags: []});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/api/Catalog')
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
        setEditData({ ...editData, [name]: value });
    };

    const handleUpdateClick = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/Catalog/${editData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editData),
            });
            const data = await response.json();
            console.log('Updated data:', data);
            setIsEditing(false);
            setCatalogData(prevData => prevData.map(item => (item._id === editData._id ? editData : item)));
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    return(
        <>
            <div className={style.adminContainer}>
                <h1 className={style.adminTitle}>Admin Panel</h1>
                <AddItemFrom/>
                <div className="tableWrapper">
                    <table className={style.catalogTable}>
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th className="ImageLinkColumn">Image Link</th>
                            {/* Добавлен className */}
                            <th>Price</th>
                            <th>Tags</th>
                            <th>Actions</th>
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
                                <td className="ImageLinkColumn"> {/* Добавлен className */}
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
                                        <input type="text" name="Tags"
                                               value={Array.isArray(editData.Tags) ? editData.Tags.join(', ') : ''}
                                               onChange={handleInputChange}/>
                                    ) : Array.isArray(item.Tags) ? item.Tags.join(', ') : ''}
                                </td>
                                <td>
                                    {isEditing && editData._id === item._id ? (
                                        <button onClick={handleUpdateClick} className={style.button}>Save</button>
                                    ) : (
                                        <button onClick={() => handleEditClick(item)}
                                                className={style.button}>Edit</button>
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

export default CatalogAdmin