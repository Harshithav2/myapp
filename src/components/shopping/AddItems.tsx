import React, { useState } from 'react';
import { onAddItem } from '../service/item.service';

const AddItems = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setItemImage] = useState<any>(null);

  const imageUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setItemImage(base64);
  }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const filReader = new FileReader();
      filReader.readAsDataURL(file);

      filReader.onload = () => {
        resolve(filReader.result);
      };

      filReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const submitAddItem = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('price',price);
    formData.append('name',name);
    formData.append('description',description);
    formData.append('image',image);
    await onAddItem(
      formData
    );
  }

  return (
    <div>
      <div className="login-container">
        <div data-testid='login-test' className='add-items-form'>
          <h3 className="text-center text-info">Add items</h3>
          <div className="row form-group">
            <label className="text-info">Name:</label>
            <input className="col-sm-8 form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
          </div>
          <div className="row form-group">
            <label className="text-info">Description:</label>
            <input className="col-sm-8 form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
          </div>
          <div className="row form-group">
            <label className="text-info">Price:</label>
            <input className="col-sm-8 form-control" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
          </div>
          <div className="row form-group">
            <label className="text-info">Photo:</label>
            <input type="file" name='image' accept="image/png, image/jpeg" onChange={imageUpload} />
          </div>
          <img src={image} alt='no imag' />
          <button type="submit" data-testid='login-button' name="submit" onClick={submitAddItem} className="btn btn-primary login-btn" >add item</button>
        </div>
      </div>
    </div>
  );
};
export default AddItems;
