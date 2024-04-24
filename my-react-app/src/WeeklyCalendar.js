// WeeklyCalendar.js

import React from 'react';
import './App.css';
import NoteDialog from './NoteDialog';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeeklyCalendar = () => {
    const [notes, setNotes] = React.useState({});
    const [showDialog, setShowDialog] = React.useState(false);
    const [selectedDay, setSelectedDay] = React.useState(null);
    const [editIndex, setEditIndex] = React.useState(null);

    const openDialog = (day, index) => {
        setSelectedDay(day);
        setEditIndex(index);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setSelectedDay(null);
        setEditIndex(null);
        setShowDialog(false);
    };

    const addNote = (text, index) => {
        if (text && selectedDay) {
            setNotes(prevNotes => ({
                ...prevNotes,
                [selectedDay]: [...(prevNotes[selectedDay] || []), text]
            }));
        }
    };

    return (
        <div className="table-container">
            {daysOfWeek.map(day => (
                <div key={day} className="day-column">
                    <div>{day}</div>
                    <button onClick={() => openDialog(day)}>Add Note</button>
                    {notes[day] && notes[day].map((note, index) => (
                        <div key={index} className="note-square">
                            {note}
                            <button onClick={() => openDialog(day, index)}>Edit</button>
                        </div>
                    ))}
                </div>
            ))}
            {showDialog && (
                <NoteDialog
                    day={selectedDay}
                    editIndex={editIndex}
                    onClose={closeDialog}
                    onSubmit={addNote}
                />
            )}
        </div>
    );
};

export default WeeklyCalendar;
