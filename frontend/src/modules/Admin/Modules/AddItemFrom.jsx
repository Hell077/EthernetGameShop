import React, { useState } from 'react';
import axios from 'axios';
import style from './AddItemForm.module.css'; // Подключаем файл стилей
import { toast } from 'react-toastify';

const AddItemForm = () => {
    const [formData, setFormData] = useState({
        ImageLink: '',
        Name: '',
        Price: 0,
        Title: '',
        Tags: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { ImageLink, Name, Price, Title, Tags } = formData;

        if (!ImageLink || !Name || !Title || !Tags || Price <= 0) {
            toast.error('Please fill in all fields and ensure Price is greater than 0.');
            return;
        }

        try {
            const tagsArray = Tags.split(',').map(tag => tag.trim());
            const newItem = { ...formData, Tags: tagsArray };

            const response = await axios.post('http://localhost:3000/api/Catalog', newItem);
            toast.success('Item added successfully!');
            console.log('Response from server:', response.data);
            setFormData({
                ImageLink: '',
                Name: '',
                Price: 0,
                Title: '',
                Tags: '',
            });
        } catch (error) {
            toast.error('Error adding new catalog item.');
            console.error('Error adding new catalog item:', error);
        }
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.formGroup}>
                    <label htmlFor="imageLink">Image Link:</label>
                    <input type="text" id="imageLink" name="ImageLink" value={formData.ImageLink} onChange={handleInputChange} className={style.input} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="Name" value={formData.Name} onChange={handleInputChange} className={style.input} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="Price" value={formData.Price} onChange={handleInputChange} className={style.input} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="Title" value={formData.Title} onChange={handleInputChange} className={style.input} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="tags">Tags (разделите теги запятой):</label>
                    <input type="text" id="tags" name="Tags" value={formData.Tags} onChange={handleInputChange} className={style.input} />
                </div>
                <button type="submit" className={style.button}>Add Item</button>
            </form>
        </div>
    );
};

export default AddItemForm;
