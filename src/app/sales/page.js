"use client"
import SalesList from "./SalesList"
import { useState, useEffect } from "react"

function SalesPage() {
    const [sales, setSales] = useState([]);
    useEffect(() => {
        fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=0")
        .then(res => res.json())
        .then(data => {setSales(data)})
        .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <SalesList sales={sales}></SalesList>
        </div>
    )
}

export default SalesPage