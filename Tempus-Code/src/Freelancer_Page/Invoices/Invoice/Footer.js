export default function Footer({
    name,
    email,
    website,
    phone,
    bankAccount,
    bankName,
  }) {
    return (
      <>
        <footer className="footer2-fInvoice">
          <ul>
            <li>
              <span>Your name:</span> {name}
            </li>
            <li>
              <span>Your email:</span> {email}
            </li>
            <li>
              <span>Phone number:</span> {phone}
            </li>
            <li>
              <span>Bank:</span> {bankName}
            </li>
            <li>
              <span>Account holder:</span> {name}
            </li>
            <li>
              <span>Account number:</span> {bankAccount}
            </li>
            <li>
              <span>Website:</span>{" "}
              <a href={website} target="_blank" rel="noopenner noreferrer">
                {website}
              </a>
            </li>
          </ul>
        </footer>
      </>
    )
  }