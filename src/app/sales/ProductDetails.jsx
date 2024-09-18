function ProductDetails({ Products }) {
  /*
  ! El if() -> Es una verificación de carga condicional
  * Tiene la función de manejar los casos en los que los datos aún no están disponibles, 
  * lo cual puede suceder cuando el componente está montado pero la información aún no ha sido obtenida de la API. */
  if (!Products) {
    return <div>Cargando datos de los productos...</div>;
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}>
      <h1 style={{ marginBottom: "12px"}}>
        Productos de la compra:
      </h1>
      <ul style={{ listStyleType: "initial", padding: 0 }}>
        {Products.map(product => (
          <li style={{ marginBottom: "12px" }}>
            <h2>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h2>
            <p>Precio: ${product.price.$numberDecimal}</p>
            <p>Cantidad: {product.quantity} {product.quantity === 1 ? "unidad" : "unidades"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDetails;
