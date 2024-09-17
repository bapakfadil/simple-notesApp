import { notesData } from "./components/notes.js";

// Get elements
const notesListElement = document.querySelector("#notesList");

// Create note item
function createNoteItemElement({ id, title, body }) {
  return `
    <div data-noteid="${id}">
      <h3>${title}</h3>
      <p>${body}</p>
    </div>
  `;
}

// Create all notes
const listOfNoteItem = notesData.map((note) => {
  return createNoteItemElement(note);
});

/**
 * Render all notes
 *
 * Remember! The output of map() is array. We must joining all element of array because it is string.
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
notesListElement.innerHTML = listOfNoteItem.join("");
