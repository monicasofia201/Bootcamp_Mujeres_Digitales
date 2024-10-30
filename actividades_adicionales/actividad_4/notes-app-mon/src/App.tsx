import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import NoteInput from './components/noteInput';
import Note from './components/note';
import './App.css';

interface NoteType {
  id: number;
  content: string;
  color: string;
}

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [nextId, setNextId] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#EAD1DC', '#C0E0C1', '#D1E1C8', '#F4D1B6', '#F4B9B1'];
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    // Mostrar alerta de bienvenida al montar el componente
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Este es un espacio para agregar tus notas.',
      icon: 'info',
      confirmButtonText: '¡Entendido!',
    });

    // Establecer una imagen de fondo aleatoria
    setBackgroundImage(`https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random=${Math.floor(Math.random() * 1000)}`);
  }, []);

  const handleAddNote = (content: string) => {
    const color = colors[colorIndex];
    const newIndex = (colorIndex + 1) % colors.length;
    setColorIndex(newIndex);

    setNotes([...notes, { id: nextId, content, color }]);
    setNextId(nextId + 1);
    Swal.fire({
      title: 'Éxito',
      text: 'Nota agregada con éxito.',
      icon: 'success',
      confirmButtonText: '¡Genial!',
    });
  };

  const handleEditNote = (id: number, newContent: string) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, content: newContent } : note)));
    Swal.fire({
      title: 'Éxito',
      text: 'Nota modificada con éxito.',
      icon: 'success',
      confirmButtonText: '¡Genial!',
    });
  };

  const handleDeleteNote = (id: number) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres eliminar esta nota?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setNotes(notes.filter(note => note.id !== id));
        Swal.fire({
          title: 'Éxito',
          text: 'Nota eliminada con éxito.',
          icon: 'success',
          confirmButtonText: '¡Genial!',
        });
      }
    });
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Aplicación de Notas</h1>
      <NoteInput onAddNote={handleAddNote} />
      <div id="notesList">
        {notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            content={note.content}
            color={note.color}
            onEdit={handleEditNote}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
