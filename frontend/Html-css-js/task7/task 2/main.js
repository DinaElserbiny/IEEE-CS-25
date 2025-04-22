// script.js


const noteTitleInput = document.getElementById('note-title');
const noteDescriptionInput = document.getElementById('note-description');
const notesContainer = document.getElementById('notes-container');


function addNote() {
    const title = noteTitleInput.value.trim();
    const description = noteDescriptionInput.value.trim();


    if (title === "" || description === "") {
        alert("Please provide both a title and description.");
        return;
    }


    const note = {
        title: title,
        description: description,
    };


    let notes = JSON.parse(localStorage.getItem('notes')) || [];


    notes.push(note);


    localStorage.setItem('notes', JSON.stringify(notes));


    noteTitleInput.value = '';
    noteDescriptionInput.value = '';


    renderNotes();
}


function renderNotes() {

    notesContainer.innerHTML = '';


    const notes = JSON.parse(localStorage.getItem('notes')) || [];


    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.description}</p>
            <button onclick="deleteNote(${index})">Delete Note</button>
        `;
        notesContainer.appendChild(noteElement);
    });
}


function deleteNote(index) {

    let notes = JSON.parse(localStorage.getItem('notes')) || [];


    notes.splice(index, 1);


    localStorage.setItem('notes', JSON.stringify(notes));


    renderNotes();
}


window.onload = function() {
    renderNotes();
};
