import { useBookContext } from "./itemContext"
import { UpdateBookForm } from "./editBookForm"
import { useState } from "react"
import { useNavigate } from "react-router";

export function UiBlock() {
    const blockingStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        backgroundColor: "transparent" 
    }
    return (<div
            style={blockingStyle}
        />)
}

export function UiLoading() {
    return (<div>
            <h3>Loading...</h3>
            </div>)
}

export function ItemListHeader(props) {
    return (
        <>
            <ItemTitle columnList={props.columnList}/>
        </>
    )
}

export function ItemListLoading(props) {
    return (
        <>
            <ItemListHeader columnList={props.columnList} columnsCount={props.columnsCount}/>
            <div className="columns is-2">
                <div className="column is-3 m-1"></div>
                <div className="column is-4 m-1">
                   <UiLoading/> 
                </div>
                <div className="column is-2 m-1"></div>
            </div>
            <UiBlock/>
        </>
    )
}

export function ItemListLoaded(props) {
    const { books: items} = useBookContext()
    let navigate = useNavigate()
    return (
        <>
            <ItemListHeader columnList={props.columnList} columnsCount={props.columnsCount}/>
            <div style={{overflowY:"auto", overflowX: "hidden",maxHeight: '700px'}}>
                {items.map(i => <Item key={i.id} staticColumn={props.staticColumn} columnList={props.columnList} columnsCount={props.columnsCount} {...i}/>)}
                <div className="columns is-2">
                <div className="column is-3 m-1 "></div>
                <div className="column is-2 m-1 has-background-light has-text-centered"></div>
                <div className="column is-2 m-1 has-background-light has-text-centered"></div>
                <button className="column is-2 m-1 has-background-info has-text-centered" onClick={() => navigate("book/add")}>Add Book</button>
            </div>
            </div>
        </>
    )
}

export function ItemList(props) {
    const { books: items, loading, error } = useBookContext()
    // let items = props.items
    //if (loading) return <><h3>Loading...</h3></>
    if (error) return <><h3>{error}</h3></>
    let staticColumn = "id"
    let columnsCount = 0
    let columnList = []
    if (items.length !== 0) {
        columnList = Object.getOwnPropertyNames(items[0]).filter(x => x != staticColumn)
        columnsCount = columnList.length
    }

    if (columnsCount === 0) {
        columnsCount = 2
        columnList = ["title", "author"]
    }

    return (<div className="mt-6">
            {loading === false ? 
            <ItemListLoaded  staticColumn={staticColumn} columnList={columnList} columnsCount={columnsCount}/> 
            : <ItemListLoading columnList={columnList} columnsCount={columnsCount}/>}
            </div>)
}


function ItemTitle(props) {
        return (
            <div className="columns is-2">
                <div className="column is-3 m-1"></div>
                {props.columnList.map( c=> <ItemCell key={c} value={c} isTitle={true}/>)}
                <div className="column is-2 m-1 has-background-info"></div>
            </div>
        )
}

function Item(props) {
    const { deleteBook } = useBookContext()
    let [mode, setMode] = useState("readonly")
    const toggleMode = () => {setMode("readonly")}
    let navigate = useNavigate()
    if (mode === "readonly") {
        return (
            <div className="columns is-2" data-book-id={props[props.staticColumn]}>
                <div className="column is-3 m-1"></div>
                {props.columnList.map( c=> <ItemCell key={c} value={props[c]}/>)}
                <button className="column is-1 m-1 has-background-warning has-text-centered" onClick={() => navigate("book/"+props[props.staticColumn]+"/edit")}>Edit</button>
                <button className="column is-1 m-1 has-background-danger has-text-centered" onClick={() => deleteBook(props[props.staticColumn])}>Delete</button>
            </div>
        )
    } else if(mode === "edit") {
        return <UpdateBookForm {...props} toggleMode={toggleMode}/>
    }
}

function ItemCell(props) {
    const isTitle = props?.isTitle ?? false
    if (!isTitle){
        return <div className="column is-2 m-1 has-background-light has-text-centered"><span>{props.value}</span></div>
    } else 
    {
        return <div className="column is-2 m-1 has-background-info has-text-centered is-capitalized"><span>{props.value}</span></div>
    }
}