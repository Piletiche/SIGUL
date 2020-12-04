import React, { useEffect } from 'react';
import { Button } from "primereact/button";

export const Invoice = () => {

    const print = () => {
        window.print();
    }

    useEffect(() => {
        const themeLink = document.getElementById('theme-css');
        console.log(themeLink)
    })

    return (
        <div>
            <Button label="Print" icon="pi pi-print" onClick={print} style={{ display: 'block', marginBottom: '20px', marginLeft: '6px' }}></Button>

            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card" id="invoice-content">
                        <div className="invoice">
                            <div className="invoice-header">
                                <div className="invoice-company">
                                    <img id="invoice-logo" className="logo-image" alt="apollo-layout" />
                                    <div className="company-name">YOUR COMPANY</div>
                                    <div>9137 3rd Lane California City</div>
                                    <div>CA 93504, U.S.A.</div>
                                </div>
                                <div>
                                    <div className="invoice-title">INVOICE</div>
                                    <div className="invoice-details">
                                        <div className="invoice-label">DATE</div>
                                        <div className="invoice-value">{new Date().toISOString().split('T')[0]}</div>

                                        <div className="invoice-label">INVOICE #</div>
                                        <div className="invoice-value">8523</div>

                                        <div className="invoice-label">CUSTOMER ID</div>
                                        <div className="invoice-value">C1613</div>
                                    </div>
                                </div>
                            </div>
                            <div className="invoice-to">
                                <div className="bill-to">BILL TO</div>
                                <div className="invoice-to-info">
                                    <div>Claire Williams, 148 Hope Lane</div>
                                    <div>Palo Alto, CA 94304. </div>
                                </div>
                            </div>
                            <div className="invoice-items">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                            <th>Line Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Green T-Shirt</td>
                                            <td>1</td>
                                            <td>$49.00</td>
                                            <td>$49.00</td>
                                        </tr>
                                        <tr>
                                            <td>Game Controller</td>
                                            <td>2</td>
                                            <td>$99.00</td>
                                            <td>$198.00</td>
                                        </tr>
                                        <tr>
                                            <td>Mini Speakers</td>
                                            <td>1</td>
                                            <td>$85.00</td>
                                            <td>$85.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="invoice-summary">
                                <div className="invoice-notes">
                                    <b>NOTES</b>
                                    <div>

                                    </div>
                                </div>
                                <div>
                                    <div className="invoice-details">
                                        <div className="invoice-label">SUBTOTAL</div>
                                        <div className="invoice-value">$332.00</div>

                                        <div className="invoice-label">VAT</div>
                                        <div className="invoice-value">0</div>

                                        <div className="invoice-label">TOTAL</div>
                                        <div className="invoice-value">$332.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
