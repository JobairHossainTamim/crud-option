import React, { useState } from 'react'

const TableBook = (props) => {
    const { books, onDelete, onUpdate } = props;
    return (
        <div>
            <table>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Option</td>
                </tr>
                {
                    books.map(book => {
                        return (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                                <td><button onClick={() => onDelete(book._id)}>Delete</button></td>
                                <DescriptionForm book={book} onUpdate={onUpdate}></DescriptionForm>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}


function DescriptionForm(props) {

    const { book, onUpdate } = props;
    const [title, setTitle] = useState(book.title)
    const [description, setDescription] = useState(book.description);

  


    const handleChange = (event) => {
       
        setDescription(event.target.value)
    }

    return (
        <div>
            <td>
                <input type="text" value={description}  onChange={(event) => handleChange(event)}></input>
                
            </td>
            <td>
                <button onClick={() => onUpdate({ _id: book._id, title: title, description: description })}>Update</button>
            </td>
        </div>
    )
}

export default TableBook
