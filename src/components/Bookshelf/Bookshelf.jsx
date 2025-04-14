// src/Bookshelf.jsx
import { useState } from "react";

const Bookshelf = () => {
  // 2. Define the initial state
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  // 3a. handleInputChange
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // 3b. handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook.title.trim() === '' || newBook.author.trim() === '') return;

    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' }); // reset form
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📚 My Bookshelf</h2>

      {/* 4. Form Creation */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <div>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Add Book
        </button>
      </form>

      {/* 5. Map through your books */}
      <div>
        {books.map((book, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <strong>{book.title}</strong><br />
            <em>by {book.author}</em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
