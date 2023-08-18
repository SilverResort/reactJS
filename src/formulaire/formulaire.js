import React from 'react'
import {Form} from "react-bootstrap"


const formulaire = () => {
    return (
        <>
            <h2> Contactez-nous</h2>
            <div className='formulaire'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Votre texte</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            </div>
        </>
    )
}

export default formulaire