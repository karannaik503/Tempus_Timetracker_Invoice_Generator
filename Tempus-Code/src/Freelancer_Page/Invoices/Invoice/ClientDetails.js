export default function ClientDetails({ clientName, clientAddress }) {
    return (
      <>
        <section className="clientDetails-fInvoice">
          <h2>{clientName}</h2>
          <p>{clientAddress}</p>
        </section>
      </>
    )
  }