import SaleInfo from "./SaleInfo";

function SalesList(props) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {props.sales.map((user) => (
        <SaleInfo
          id={user._id}
          saleDate={user.saleDate}
          storeLocation={user.storeLocation}
          purchaseMethod={user.purchaseMethod}
          costumerInfo={user.customer}
        />
      ))}
    </ul>
  );
}

export default SalesList;