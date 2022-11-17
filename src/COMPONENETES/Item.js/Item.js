
const Item = (producto) => {
  return (
    <div>
        <h2>{producto.id}</h2>
        <h2>{producto.precio}</h2>
    </div>
  )
}

export default Item