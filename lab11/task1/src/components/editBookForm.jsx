import { useBookContext } from "./itemContext";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export function UpdateBookForm(props) {
    const { books, updateBook, loading} = useBookContext()
    if (loading) return <h1>Loading...</h1>
    const param = useParams()
    const id = props?.id ?? param.id
    const bookById = books.find(b => b.id === id)
    const [book, setBook] = useState({
        ...bookById
      })
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents full page reload
        e.stopPropagation();
        if (!book.title || !book.author) {
          alert('Please fill in all fields')
          return
        }
        updateBook(book)
        navigate("/")
        //props.toggleMode()
        // setBook({
        //     title: '',
        //     author: '',
        //   })
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
                        className="column is-2 m-1 has-background-dark has-text-light"
                        id={c}
                        type='text'
                        name={c}
                        value={book[c]}
                        required
                        onChange={handleChange}
                        />
                    }
                )}
                <button className="column is-2 m-1 has-background-primary" type='submit'>Update</button>        
            </form>)
}