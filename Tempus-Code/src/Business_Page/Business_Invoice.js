import React from 'react';
import Invoice_Header from "./Invoices/Invoice_Header.js";
import Invoice_hero from "./Invoices/Invoice_hero.js";
import Invoice_Footer from './Invoices/Invoice_Footer.js';
import "./Invoices/business_invoice.css";

function Business_Invoice() {
  return (
    <div>
      <Invoice_Header/>
      <Invoice_hero />
      <Invoice_Footer/>
    </div>
  );
}

export default Business_Invoice;