import React, { useEffect, useState } from 'react';
import { Item } from '../schema/item.schems';
import { ItemList } from '../service/item.service';

const ListItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    itemListing();
  }, []);

  const itemListing = async () => {
    const items = await ItemList();
    setData(items);
  }
  return (
    <div>
      <h2>ListItems</h2>
      <div className="container">
        <div className="row">
          {data.map((items: Item) => (
            <div key={items.id} className="col-sm">
              <div>
                {items.image ? (
                  <img alt='no imag' src={Buffer.from(items.image.data).toString("ascii")} width="320" height="240" />
                ) : ''}
              </div>
              <div>
                <h5 className="title" data-testid='workoutTitle'>{items.name}</h5>
                Description: <p className="description">{items.description}</p>
                Quantity: <p className="description">{items.quantity}</p>
              </div>
              {items.quantity >= 1 ? (
                <button>Add to cart</button>) : ''}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ListItems;
