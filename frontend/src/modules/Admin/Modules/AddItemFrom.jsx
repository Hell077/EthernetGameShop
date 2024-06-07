import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './AddItemForm.module.css'; // Подключаем файл стилей

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

        // Validate form data
        if (!formData.ImageLink || !formData.Name || !formData.Price || !formData.Title || !formData.Tags) {
            toast.error('Пожалуйста, заполните все поля.');
            return;
        }

        try {
            const tagsArray = formData.Tags.split(',').map(tag => tag.trim());
            const newItem = { ...formData, Tags: tagsArray };

            const response = await axios.post('http://localhost:3000/api/Catalog', newItem);
            console.log('Response from server:', response.data);

            toast.success('Элемент успешно добавлен!');

            setFormData({
                ImageLink: '',
                Name: '',
                Price: 0,
                Title: '',
                Tags: '',
            });
        } catch (error) {
            console.error('Error adding new catalog item:', error);
            toast.error('Произошла ошибка при добавлении элемента.');
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
            <ToastContainer />
        </div>
    );
};

export default AddItemForm;
