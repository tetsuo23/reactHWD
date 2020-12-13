import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./../../css/ContactForm.css";
import { init } from "emailjs-com";
import { Link } from "react-router-dom";

init("user_laNTpyQusDdaH0WxpDeNq");

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "horizon.w.design@gmail.com",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      "service_d539w1f",
      "template_8k4zhum",
      templateParams,
      "user_laNTpyQusDdaH0WxpDeNq"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("yes");
    alert(
      " Votre message a bien été envoyé, nous vous répondrons dans les plus brefs délais "
    );
  };

  render() {
    return (
      <div>
        <div className="container-fluid" id="contact">
          
            <div className="col-3 d-flex justify-content-start">
              <p> <strong>06 45 84 64 03 / 06 30 92 95 33</strong> </p>
            </div>
            <div className="col-1 offset-8">
              <div className="btn btn-secondary btn-lg d-flex justify-content-center">
                <Link to="/">Retougtyhrfthfhgfr</Link>
              </div>
            </div>
          
          <h2 className="p-heading1">Contact</h2>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <Label className="text-muted">adresse email </Label>
              <Input
                name="email"
                value={this.state.email}
                className="text-primary col-10 offset-1 col-md-6 offset-md-3"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Votre email"
                required
                pattern="^(?=[A-Z0-9][A-Z0-9@._%+-]{5,253}+$)[A-Z0-9._%+-]{1,64}+@(?:(?=[A-Z0-9-]{1,63}+\.)[A-Z0-9]++(?:-[A-Z0-9]++)*+\.){1,8}+[A-Z]{2,63}+$"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-muted">Nom</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary col-10 offset-1 col-md-6 offset-md-3"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Votre nom"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-muted">Sujet</Label>
              <div className="row">
                <select
                  className="custom-select col-8 offset-2 col-md-4 offset-md-4"
                  id="exampleFormControlSelect1"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange.bind(this, "subject")}
                  placeholder=""
                >
                  <option>Developpement de site</option>
                  <option>Refonte de site</option>
                  <option>Identité visuelle/design/logo</option>
                  <option>Référencement</option>
                  <option>E-commerce</option>
                  <option>Application mobile</option>
                  <option>Autres</option>
                </select>
              </div>

              {/* <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              /> */}
            </FormGroup>
            <FormGroup>
              <Label className="text-muted">Votre demande</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary col-10 offset-1 col-md-6 offset-md-3"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>
            <Button
              variant="primary"
              type="submit"
              className=" btn btn-secondary col-2"
              onSubmit={this.handleClick}
            >
              Envoyer
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default ContactForm;
