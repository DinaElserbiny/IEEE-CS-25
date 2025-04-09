document.addEventListener('DOMContentLoaded', function () {
    const currentElement = document.querySelector('.element.current');
    const addInput = document.querySelector('.classes-to-add');
    const removeInput = document.querySelector('.classes-to-remove');
    const classesListContainer = document.querySelector('.classes-list div');
  
    // Function to update the class list display
    function updateClassList() {
      const classes = Array.from(currentElement.classList).sort();
      if (classes.length > 0) {
        classesListContainer.innerHTML = classes.map(cls => `<span>${cls}</span>`).join('');
      } else {
        classesListContainer.innerHTML = '<span>No Classes To Show</span>';
      }
    }
  
    // Function to handle the addition of classes
    function addClasses(classes) {
      const classesArray = classes.trim().split(/\s+/).map(cls => cls.toLowerCase());
      classesArray.forEach(cls => {
        if (cls && !currentElement.classList.contains(cls)) {
          currentElement.classList.add(cls);
        }
      });
    }
  
    // Function to handle the removal of classes
    function removeClasses(classes) {
      const classesArray = classes.trim().split(/\s+/).map(cls => cls.toLowerCase());
      classesArray.forEach(cls => {
        if (cls && currentElement.classList.contains(cls)) {
          currentElement.classList.remove(cls);
        }
      });
    }
  
    // Event listeners for the add and remove inputs
    addInput.addEventListener('blur', function () {
      const value = addInput.value.trim();
      if (value) {
        addClasses(value);
        addInput.value = ''; // Clear the input
        updateClassList(); // Update the class list display
      }
    });
  
    removeInput.addEventListener('blur', function () {
      const value = removeInput.value.trim();
      if (value) {
        removeClasses(value);
        removeInput.value = ''; // Clear the input
        updateClassList(); // Update the class list display
      }
    });
  
    // Initial update of the class list
    updateClassList();
  });
  