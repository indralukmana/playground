import React, { Fragment, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './App.css';

const destinations = [
  'Jombang',
  'Surabaya',
  'Jakarta',
  'Bandung',
  'Jogja',
  'Malang',
  'Nganjuk',
  'Tuban',
  'Bali',
  'Semarang',
];

const List = () => {
  const [listData, setListData] = useState(() =>
    [...destinations]
      .map((item) => ({ value: item, order: Math.random() }))
      .sort((a, b) => a.order - b.order)
      .map((item) => item.value)
  );

  const dragStartIndexRef = useRef();

  function handleDragStart(index) {
    // console.log('Event: ', 'dragstart');
    console.log(index);
    dragStartIndexRef.current = index;
  }
  function handleDragEnter(e) {
    // console.log('Event: ', 'dragEnter');
    e.currentTarget.parentNode.classList.add('over');
  }
  function handleDragLeave(e) {
    e.currentTarget.parentNode.classList.remove('over');
  }
  function handleDragOver(e) {
    // console.log('Event: ', 'dragOver');
    e.preventDefault();
  }
  function handleDragDrop(e, index) {
    console.log('drop', index);
    // swapItem(dragStartIndex, destinationDropIndex);
    e.currentTarget.parentNode.classList.remove('over');
    setListData((prev) => {
      const fromItem = prev[dragStartIndexRef.current];

      const newFiltered = [...prev.filter((item) => item !== fromItem)];

      console.log({ newFiltered });

      newFiltered.splice(index, 0, fromItem);

      return newFiltered;
    });
  }

  return (
    <ul className='draggable-list' id='draggable-list'>
      {listData.map((listItem, index) => {
        return (
          <li data-index={index} key={listItem}>
            <span className='number'>{index + 1}</span>
            <div
              className='draggable'
              draggable='true'
              onDragStart={() => handleDragStart(index)}
              onDragEnter={(e) => handleDragEnter(e)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDragDrop(e, index)}
            >
              <p className='destination-name'>{listItem}</p>
              <i className='fas fa-grip-lines'></i>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Top 10 Indonesia Destinations</h1>
        <p>Drag and drop the items into their corresponding spots</p>

        <List />
      </div>
    </div>
  );
}

export default App;
