function ClientDetails({ Client }) {
  /*
  ! El if() -> Es una verificación de carga condicional
  * Tiene la función de manejar los casos en los que los datos aún no están disponibles, 
  * lo cual puede suceder cuando el componente está montado pero la información aún no ha sido obtenida de la API. */
  if (!Client) {
    return <div>Cargando datos del comprador...</div>;
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1 style={{ marginBottom: "12px" }}>Datos del comprador</h1>
      <h2>Género: {Client.gender}</h2>
      <h2>Edad: {Client.age}</h2>
      <h2>Email: {Client.email}</h2>
      <h2>Satisfacción: {Client.satisfaction}</h2>
    </div>
  );
}

export default ClientDetails;
