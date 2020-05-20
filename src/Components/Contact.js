import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Hello, Contact.</h1>
            <form>
                <label>
                    Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact;