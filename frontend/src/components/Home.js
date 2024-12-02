// frontend/src/components/Home.js (continued)
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function Home() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const { token } = useAuth();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notes', config);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setTitle('');
    setContent('');
    setEditingNoteId(null);
  };

  const handleShow = (note = null) => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setEditingNoteId(note._id);
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNoteId) {
        await axios.put(
          `http://localhost:5000/api/notes/${editingNoteId}`,
          { title, content },
          config
        );
      } else {
        await axios.post(
          'http://localhost:5000/api/notes',
          { title, content },
          config
        );
      }
      handleClose();
      fetchNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${noteId}`, config);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Notes</h2>
        <Button variant="primary" onClick={() => handleShow()}>
          Add New Note
        </Button>
      </div>

      <div className="row">
        {notes.map((note) => (
          <div key={note._id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.content}</Card.Text>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="outline-primary"
                    className="me-2"
                    onClick={() => handleShow(note)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingNoteId ? 'Edit Note' : 'Add New Note'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;