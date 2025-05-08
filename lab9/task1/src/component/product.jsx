export default function Product(props) {

    return (
        <li className="list-item" data-id={props.id}>
            <span style={{color: props.inStock ? "green" : "red"}}>{props.name}</span>
            <span>" | "</span>
            <span>{props.price+" | "}</span>
            <span>
                <input type="checkbox" id={props.id} checked={props.inStock} onClick={(e) => e.preventDefault()}/>
            </span>
            <button onClick={() => props.updateStock(props.id)}>UpdateStock</button>
        </li>
    )
}