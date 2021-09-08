import React, { ChangeEvent, useState } from 'react';

const AddItems = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [itemImage, setItemImage] = useState<any>('');

  const imageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setItemImage(e.target.files[0]);
  }

  return (
    <div>
      <div className="login-container">
        <div data-testid='login-test' className='login-form'>
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
            <input type="file" value={itemImage} onChange={(e) => imageUpload(e)}/>
          </div>
          <button type="submit" data-testid='login-button' name="submit" className="btn btn-primary login-btn" >Login</button>
        </div>
      </div>
    </div>
  );
};
export default AddItems;
