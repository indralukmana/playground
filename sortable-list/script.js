(() => {
  const draggableList = document.getElementById('draggable-list');

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

  let dragStartIndex;

  const listItems = [];

  const createList = () => {
    [...destinations]
      .map((item) => ({ value: item, order: Math.random() }))
      .sort((a, b) => a.order - b.order)
      .map((item) => item.value)
      .forEach((destination, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="destination-name">${destination}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

        listItems.push(listItem);
        draggableList.appendChild(listItem);
      });
  };

  function dragStart() {
    // console.log('Event: ', 'dragStart');
    const parent = this.parentNode;
    console.log('t', parent);
    dragStartIndex = +parent.getAttribute('data-index');
  }
  function dragEnter() {
    // console.log('Event: ', 'dragEnter');
    this.classList.add('over');
  }
  function dragLeave() {
    this.classList.remove('over');
  }
  function dragOver(e) {
    // console.log('Event: ', 'dragOver');
    e.preventDefault();
  }
  function dragDrop() {
    const destinationDropIndex = +this.getAttribute('data-index');
    swapItem(dragStartIndex, destinationDropIndex);
  }

  function swapItem(fromIndex, destinationIndex) {
    const fromItem = listItems[fromIndex].querySelector('.draggable');
    const destinationItem =
      listItems[destinationIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(destinationItem);
    listItems[destinationIndex].appendChild(fromItem);

    destinationItem.classList.remove('over');
  }

  const createEventListeners = () => {
    const draggables = document.querySelectorAll('.draggable');
    const draggableListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach((draggable) => {
      draggable.addEventListener('dragstart', dragStart);
    });

    draggableListItems.forEach((draggableListItem) => {
      draggableListItem.addEventListener('dragenter', dragEnter);
      draggableListItem.addEventListener('dragleave', dragLeave);
      draggableListItem.addEventListener('dragover', dragOver);
      draggableListItem.addEventListener('drop', dragDrop);
    });
  };

  createList();
  createEventListeners();
})();
