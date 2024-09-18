"use client";
import { useState, useEffect } from "react";
import ClientDetails from "../ClientDetails";
import ProductDetails from "../ProductDetails";

export default function SaleDetails({ params }) {
  const { id } = params;
  const [sale, setSale] = useState([]);

  useEffect(() => {
    fetch("https://salesbackend.azurewebsites.net/api/sales")
      .then((response) => response.json())
      .then((data) => setSale(data.find((sale) => sale._id === id)))
      .catch((e) => console.error(e));
  }, [id]);

  if (!sale) {
    return (
      <div style={{ 
        textAlign: "center", 
        padding: "50px", 
        backgroundColor: "#f8d7da", 
        color: "#721c24", 
        borderRadius: "8px", 
        maxWidth: "600px", 
        margin: "0 auto", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>¡Venta no encontrada!</h1>
        <p style={{ fontSize: "18px" }}>La venta que estás buscando no existe o fue eliminada.</p>
        <a href="/sales" style={{ 
          textDecoration: "none", 
          backgroundColor: "#007bff", 
          color: "#fff", 
          padding: "10px 20px", 
          borderRadius: "5px", 
          display: "inline-block", 
          marginTop: "20px" 
        }}>
          Volver a la lista de ventas
        </a>
      </div>
    );
  } else {
    return (
      <div style={{ padding: "16px" }}>
        <div style={{ backgroundColor: "#f0f8ff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h1 style={{ marginBottom: "16px", fontSize: "24px", color: "#333" }}>Datos de la venta</h1>
          <h2 style={{ marginBottom: "8px", color: "#555" }}>Fecha de compra: {sale.saleDate}</h2>
          <h2 style={{ marginBottom: "8px", color: "#555" }}>Ciudad de tienda: {sale.storeLocation}</h2>
          <h2 style={{ marginBottom: "8px", color: "#555" }}>Método de pago: {sale.purchaseMethod}</h2>
        </div>
        <br />
        <ClientDetails Client={sale.customer} />
        <br />
        <ProductDetails Products={sale.items} />
      </div>
    );
  }
}