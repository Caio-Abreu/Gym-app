// NoteDialog.js

import React from 'react';
import './App.css';

const NoteDialog = ({ day, editIndex, onClose, onSubmit }) => {
    const [text, setText] = React.useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(text, editIndex);
        onClose();
    };

    const handleCancelEdit = () => {
        onClose();
    };

    return (
        <div className="note-dialog-container">
            <div className="note-dialog">
                <h2>{editIndex !== null ? 'Edit Note' : 'Add Note'} for {day}</h2>
                <textarea value={text} onChange={handleChange} />
                <button onClick={handleSubmit}>{editIndex !== null ? 'Update Note' : 'Add Note'}</button>
                <button onClick={onClose}>Cancel</button>
                {editIndex !== null && <button onClick={handleCancelEdit}>Cancel Edit</button>}
            </div>
        </div>
    );
};

export default NoteDialog;
