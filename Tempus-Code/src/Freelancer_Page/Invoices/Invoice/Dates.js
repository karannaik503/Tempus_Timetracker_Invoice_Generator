export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
      <>
        <article className="date-fInvoice">
          <ul>
            <li>
              <span>Invoicer number:</span> {invoiceNumber}
            </li>
            <li className="date-list-fInvoice">
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