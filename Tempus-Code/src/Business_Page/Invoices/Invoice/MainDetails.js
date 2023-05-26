export default function MainDetails({ name, address }) {
  return (
    <>
      <section className="mainDetails-bInvoice">
        <h2>{name}</h2>
        <p>{address}</p>
      </section>
    </>
  )
}