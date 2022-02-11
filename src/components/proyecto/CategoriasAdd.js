import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

const CategoriasAdd = ({setSearch}) => {
    
    const [palabra, setPalabra] = useState('');
    const searchref = useRef()

    const handleInputChange = (e) => {
        setPalabra(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(palabra)
    }

    useEffect(() => {
        searchref.current.focus()
    }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Busqueda</Form.Label>
            <Form.Control
            ref={searchref}
            name="palabra"
            type="text"
            placeholder="Buscar"
            value={palabra}
            onChange={handleInputChange}
            />
        </Form.Group>
      </form>
    </div>
  );
};

export default CategoriasAdd;
