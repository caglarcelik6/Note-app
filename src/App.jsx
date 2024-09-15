
import React, { useState } from 'react';
import './App.css';

function App() {
  // State'ler
  const [notes, setNotes] = useState([]); 
  const [currentNote, setCurrentNote] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000'); 
  const[search,setSearch]=useState('')

  // Renk seçim butonları
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F033', '#FF33F0'];

  // Not ekleme fonksiyonu
  const addNotes = () => {
    if (currentNote.trim()) {
      setNotes([...notes, { text: currentNote, color: selectedColor }]);
      setCurrentNote('');
      setSelectedColor('#000000');
    }
  };

  // Textarea değişikliklerini işleyen fonksiyon
  const handleTextareaChange = (event) => {
    setCurrentNote(event.target.value);
  };

  // Renk butonuna tıklama işlemini işleyen fonksiyon
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)

  }

  const filteredData = notes.filter(item=> item.text.toLowerCase().includes(search.toLowerCase()));

  

  return (
    <div className='container'>
      <h1>Note App</h1>
      <input value={search} onChange={handleSearch} type="text" placeholder='Search...' className='input' />
      <label className='label'>
        <textarea
          className='text'
          name="postContent"
          rows={10}
          cols={60}
          placeholder='Enter your note here'
          value={currentNote}
          onChange={handleTextareaChange}
        />
        <div className='color-picker'>
          {colors.map((colo, index) => (
            <button className='btn2'
              key={index}
              style={{ backgroundColor: colo, border: 'none', margin: '5px', cursor: 'pointer' }}
              onClick={() => handleColorClick(colo)}
            />
          ))}
        </div>
        <button className='btn' onClick={addNotes}>Add</button>
      </label>
      <div className='notes'>
        {filteredData.map((note, index) => (
          <p key={index} className='note' style={{ backgroundColor: note.color }}>
            {note.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
