import { Component } from 'react';
import Form from './Components/Form/';
import ContactList from './Components/ContactList';
import ContactFilter from './Components/ContactFilter';
import Container from './Components/Container';
import { connect } from 'react-redux';
import contactsOperetions from './redux/contacts/operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

render (){

  return(
    <Container>
      <h1>Phonebook</h1> 
      <Form onAddContact = {this.addContact}
     />
     <ContactFilter/>
      <ContactList/>
      </Container>
    );
  }
};



const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperetions.fetchContact()),
});


export default connect(null,mapDispatchToProps)(App);
