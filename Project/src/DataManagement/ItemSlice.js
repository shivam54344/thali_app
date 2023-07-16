import { createSlice } from '@reduxjs/toolkit';
import chapati from '../Images/chapati.png'
import daal from '../Images/daal.png'
import curd from '../Images/curd.png'
import pickle from '../Images/pickle.png'
import paneer from '../Images/paneer.png'
import sweet from '../Images/sweet.png'

const ItemSlice = createSlice({
    name: 'itemsList',
    initialState: [
        { id: 1, name: 'Chapati', price: 7, priceType: 'Pcs', img: chapati, quantity: 1, totalAmount: 7 },
        { id: 2, name: 'Daal', price: 90, priceType: 'Plate', img: daal, quantity: 1, totalAmount: 90 },
        { id: 3, name: 'Shahi Paneer', price: 160, priceType: 'Plate', img: paneer, quantity: 1, totalAmount: 160 },
        { id: 4, name: 'Curd', price: 15, priceType: 'Pack', img: curd, quantity: 1, totalAmount: 15 },
        { id: 5, name: 'Pickle', price: 3, priceType: 'Pack', img: pickle, quantity: 1, totalAmount: 3 },
        { id: 6, name: 'Sweet', price: 40, priceType: '2 Pcs', img: sweet, quantity: 1, totalAmount: 40 }
    ]
});

export default ItemSlice.reducer;
