import { useBookContext } from "./itemContext";
import { useState } from "react";
import { useNavigate } from "react-router";

export function CreateBookForm(props) {
    const {addBook} = useBookContext()
    const [book, setBook] = useState({
        title: '',
        author: '',
      })

    let navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents full page reload
        e.stopPropagation();
        if (!book.title || !book.author) {
          alert('Please fill in all fields')
          return
        }
        addBook(book)
        navigate("/")
      }
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setBook((prevBook) => ({
          ...prevBook,
          [name]: value,
        }))
      }
    let columnList = props?.columnList ?? ["title", "author"]

    return (<form className="columns is-2" onSubmit={handleSubmit}>
                <div className="column is-3 m-1"></div>
                {columnList.map( c=> 
                    {
                        return <input key={c}
                        className="column is-2 m-1 has-background-primary"
                        id={c}
                        type='text'
                        name={c}
                        value={book[c]}
                        required
                        onChange={handleChange}
                        />
                    }
                )}
                <button className="column is-2 m-1 has-background-primary" type='submit'>Add</button>        
            </form>)
}