
import Item from "../Item.js/Item"

const ListItem = (productos) => {
  return (
    <div>
        { productos.map((producto)=>(
            <Item key={producto.id} producto={producto}/>)
        )}
    </div>
  )
}

export default ListItem