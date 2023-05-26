import React from "react"

export default function Table({ list, total }) {
  return (
    <>
      <table className="table2-bInvoice">
        <thead>
          <tr>
            <td>Description</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div className="totalAmount-bInvoice">
        <h2>
          $ {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}