import React from 'react';
import Invoice_Header from "./Invoices/Invoice_Header.js";
import Invoice_Hero from "./Invoices/Invoice_hero.js";
import Invoice_Footer from './Invoices/Invoice_Footer.js';
import "./Invoices/freelancer_invoice.css";

function Freelancer_Invoice() {
  return (
    <div>
      <Invoice_Header/>
      <Invoice_Hero />
      <Invoice_Footer/>
    </div>
  );
}

export default Freelancer_Invoice;