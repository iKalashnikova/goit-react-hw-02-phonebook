import React, { Component } from "react";


class ContactForm extends Component {
    state = {
     name: '',
  number: ''
    }

      handleInputСhange = event => {
   
    this.setState({ [event.target.name]: event.target.value });
      };
    
     handleSubmit = (event) => {
    event.preventDefault()
    
         this.props.onSubmit(this.state);
         this.reset();
     }
    
    reset = () => {this.setState( {name: '',
  number: ''})}
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label >
              Name
                    <input
                value={this.state.name}
                onChange={this.handleInputСhange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label >
              Number
                    <input
                value={this.state.number}
                onChange={this.handleInputСhange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type='submit'> Add contact</button>
          </form>
        )
    }
}

export default ContactForm