import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        name: '',
        password: '',
        email: ''
    }

    handleChange( e ) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        /**
         * This regular expression doesn't ask for much. All that's required is that the username only contains lowercase characters, numbers, underscores, or hyphens.
         * It must also be between 3 and 16 characters long
         */
        let nameReg = new RegExp( /^[a-z0-9_-]{3,16}$/ );
        /**
         * This regular expression first checks for emails by first checking allowed characters before an @ sign, allowed characters after the @ sign, a period, and then
         * 2-6 more characters for the tail
         */
        let emailReg = new RegExp( /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ );
        /**
         * This regular expression requires a lot more. The password must have at least one of each: lowercase letter, capital letter, and special character.
         * It must also be 8 characters in length or more
         */
        let passReg = new RegExp( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/ );

        const styles = {
            name: { color: nameReg.test( this.state.name ) ? 'green' : 'red' },
            email: { color: emailReg.test( this.state.email ) ? 'green' : 'red' },
            password: { color: passReg.test( this.state.password ) ? 'green' : 'red' }
        }

        return (
            <div className="App">
                <div className='instructions'>
                    <p>The username must be between 3 and 16 characters long. It may only contain lowercase letters, underscores (_), and hyphens (-)</p>
                    <p>The email must have text before the @ sign, an @ sign, more text, a period, and then 2-6 characters at the end (com, gov, etc)</p>
                    <p>The password must be greater than 7 characters long. It must contain at least one lowercase letter, one capital letter, and one special character (!@#\$%\^&\*)</p>
                </div>

                <div className='inputs'>
                    <input onChange={e => this.handleChange(e)} name='name' placeholder='username' autoComplete='off' />
                    <input onChange={e => this.handleChange(e)} name='email' placeholder='email' autoComplete='off' />
                    <input onChange={e => this.handleChange(e)} name='password' placeholder='password' autoComplete='off' />
                    Username: <div style={styles.name}>{this.state.name}</div>
                    Email: <div style={styles.email}>{this.state.email}</div>
                    Password: <div style={styles.password}>{this.state.password.replace(/./g, '*')}</div> {/* replace [each character] with an asterisk */}
                    <br/> <hr style={{width: '100%'}} /> <br/>
                </div>
            </div>
        );
    }
}

export default App;
