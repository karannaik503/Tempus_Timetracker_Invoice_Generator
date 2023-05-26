export default function MainDetails({ name, address }) {
    return (
      <>
        <section className="mainDetails-fInvoice">
          <h2>{name}</h2>
          <p>{address}</p>
        </section>
      </>
    )
  }