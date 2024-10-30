import React, { useState } from 'react';

interface NoteProps {
    id: number;
    content: string;
    color: string;
    onEdit: (id: number, newContent: string) => void;
    onDelete: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ id, content, color, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(content);

    const handleEdit = () => {
    onEdit(id, editContent);
    setIsEditing(false);
    };

    return (
        <div className="note" style={{ backgroundColor: color }}>
        {isEditing ? (
            <>
            <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
            />
            <button onClick={handleEdit}>Guardar</button>
            </>
        ) : (
            <>
            <p>{content}</p>
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => onDelete(id)}>Eliminar</button>
            </>
        )}
        </div>
    );
};

export default Note;
