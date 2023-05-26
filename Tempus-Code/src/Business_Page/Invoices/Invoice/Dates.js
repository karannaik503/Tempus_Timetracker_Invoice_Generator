export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <>
      <article className="date-bInvoice">
        <ul>
          <li>
            <span>Invoicer number:</span> {invoiceNumber}
          </li>
          <li className="date-list-bInvoice">
            <span>Invoice date:</span> {invoiceDate}
          </li>
          <li>
            <span>Due date:</span> {dueDate}
          </li>
        </ul>
      </article>
    </>
  )
}