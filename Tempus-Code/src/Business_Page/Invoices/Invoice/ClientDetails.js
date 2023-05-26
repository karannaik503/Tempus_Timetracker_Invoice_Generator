export default function ClientDetails({ clientName, clientAddress }) {
  return (
    <>
      <section className="clientDetails-bInvoice">
        <h2>{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  )
}