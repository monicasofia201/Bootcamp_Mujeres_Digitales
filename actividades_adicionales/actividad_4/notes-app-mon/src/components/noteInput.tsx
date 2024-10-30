import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface NoteInputProps {
    onAddNote: (content: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ onAddNote }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.trim()) {
        onAddNote(inputValue);
        setInputValue('');
        } else {
        Swal.fire({
            title: '¡Oops!',
            text: 'Por favor, ingresa un texto para la nota.',
            icon: 'error',
            confirmButtonText: 'Entendido',
        });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-input">
        <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe tu nota aquí..."
        />
        <button type="submit">Agregar Nota</button>
        </form>
    );
};

export default NoteInput;
