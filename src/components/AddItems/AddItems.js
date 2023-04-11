import React from 'react';
import "./AddItems.css";

function AddItems() {
  return (
    <div className='addContainer'>
        <div className='addingContainer'>
            <h1 className='textAdder'>Add Item</h1>
            <div className='addbox'>
                <div className='addInputContainer'>
                    <div className='boxConainer'>
                        <p  className='labelName'>Cake Name</p>
                        <input className='inputfield' type="text"></input>
                    </div>
                    <div className='boxConainer'>
                        <p  className='labelName'>Category</p>
                        <input className='inputfield' type="text"></input>
                    </div>
                    <div className='boxConainer'>
                        <p  className='labelName'>Unit Price Rs</p>
                        <input className='inputfield' type="text"></input>
                    </div>
                    <div className='boxConainer'>
                        <p  className='labelName'>Description</p>
                        <input className='inputfield' type="text"></input>
                    </div>
                    <div className='boxConainer'>
                        <p  className='labelName'>Size</p>
                        <input className='inputfield' type="text"></input>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='imgAdder'>
                        <p className='labelName'>Image</p>
                        <div className='imageShower'></div>
                        <input type="file" name='Upload'></input>
                    </div>
                </div>
            </div>
            <div className='addbtndiv'>
                <button className='addbtn' type='button'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddItems;