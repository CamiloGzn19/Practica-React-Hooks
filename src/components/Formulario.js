import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
  });

  useEffect(() => {
    console.log("El componente se montó");

    return () => {
      console.log("El componente se desmontó");
    }
  }, [data]);

  const { nombre, email } = data;

  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>Formulario de registro</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Ingrese el correo"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="password"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
