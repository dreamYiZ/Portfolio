import React, { useState } from 'react';
import Content from '../../Components/Content/Content';
import Hero from '../../Components/Hero/Hero';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Contact = (props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    });

    const handleChange = (event) => {
        // console.log('event', event.target);

        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({ ...form, [name]: value });
    };
    // console.log('form', form);

    const handleSubmit = (event) => {
        event.preventDefault();
        setForm({ ...form, disabled: true, emailSent: false });
        axios
            .post('api/email', form)
            .then((res) => {
                console.log('responseDB', res);
                if (res.data.success) {
                    setForm({ ...form, disabled: false, emailSent: true });
                } else {
                    setForm({ ...form, disabled: false, emailSent: false });
                }
            })
            .catch((err) => {
                setForm({ ...form, disabled: false, emailSent: false });
                console.log('err in axios', err);
            });
    };

    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} />
            <Content>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control
                            id="full-name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control
                            id="message"
                            name="message"
                            as="textarea"
                            rows="3"
                            value={form.message}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                        className="d-inline-block btn btn-outline-light"
                        variant="blue"
                        type="submit"
                        disabled={form.disable}
                    >
                        Send
                    </Button>
                    {form.emailSent === true && (
                        <p className="d-inline success-msg">Email Sent</p>
                    )}
                    {form.emailSent === false && (
                        <p className="d-inline err-msg">Email Not Sent</p>
                    )}
                </Form>
            </Content>
        </div>
    );
};

export default Contact;
