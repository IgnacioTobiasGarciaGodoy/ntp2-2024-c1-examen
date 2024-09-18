import Link from "next/link";

function SaleInfo(props) {
  return (
    <li style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "16px", 
      marginBottom: "16px", 
      backgroundColor: "#f9f9f9" 
    }}>
      <div style={{ marginBottom: "8px" }}>
        <h3 style={{ margin: "4px 0" }}>Fecha de venta: {props.saleDate}</h3>
        <h3 style={{ margin: "4px 0" }}>Tienda: {props.storeLocation}</h3>
        <h3 style={{ margin: "4px 0" }}>Método de compra: {props.purchaseMethod}</h3>
      </div>
      <div>
        <Link href={`/sales/${props.id}`}>
          <button style={{ 
            padding: "10px 20px", 
            backgroundColor: "ActiveBorder", 
            color: "#fff", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer" 
          }}>
            Ver más info. de la compra
          </button>
        </Link>
      </div>
    </li>
  );
}

export default SaleInfo;