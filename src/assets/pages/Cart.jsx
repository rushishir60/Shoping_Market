import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import QRCodeStyling from "qr-code-styling";

function Cart({ onClose }) {
  const { cartItems, addToCart, decreaseQty, removeFromCart, clearCart } = useCart();
  const [qrCode, setQrCode] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(null); // ✅ save order total separately
  const [billText, setBillText] = useState("");


  useEffect(() => {
    setTotal(cartItems.reduce((sum, item) => sum + item.price * item.qty, 0));
  }, [cartItems]);

  const handleCheckout = () => {
  if (!cartItems.length) return;

  const finalTotal = total;
  setOrderTotal(finalTotal);

  // ✅ Create full bill string
  let billDetails = "🧾 Your Order 🧾\n\n";
  cartItems.forEach((item) => {
    billDetails += `${item.name} - ₹${item.price} × ${item.qty} = ₹${item.price * item.qty}\n`;
  });
  billDetails += `\n-----------------\nTotal: ₹${finalTotal}`;

  // ✅ Save bill details so we can also show in modal
  setBillText(billDetails);

  // ✅ Create QR Code with full bill
  const qr = new QRCodeStyling({
    width: 200,
    height: 200,
    data: billDetails, // full bill in QR
    dotsOptions: { color: "#000", type: "extra-rounded" },
    backgroundOptions: { color: "#fff" },
  });

  setQrCode(qr);
  setShowQRModal(true);

  clearCart();
};

  useEffect(() => {
    if (qrCode && showQRModal) {
      const container = document.getElementById("qr-popup");
      if (container) {
        container.innerHTML = "";
        qrCode.append(container);
      }
    }
  }, [qrCode, showQRModal]);

  return (
    <>
      {/* Cart Sidebar */}
      <div
        className="position-fixed top-0 end-0 shadow p-4 d-flex flex-column"
        style={{ width: "350px", height: "100vh", zIndex: 1050, backgroundColor: "#f7d4e4ff" }}
      >

        <i class="fa fa-times px-15px" onClick={onClose}></i>


        <button className="btn btn-danger mb-3 py-10px "
          style={{ margin: "10px" }}>

          <h4>Your Cart</h4>
        </button>



        <div className="flex-grow-1 overflow-auto">
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center border-bottom py-2"
              >
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.qty}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="mt-3 border-top pt-3">
            <h5>Total: ₹{total}</h5>
            <button className="btn btn-success w-100 mt-2" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* QR Modal Popup */}
      {showQRModal && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
    style={{ background: "rgba(0,0,0,0.6)", zIndex: 2000 }}
  >
    <div className="bg-white p-4 rounded shadow text-center" style={{ maxWidth: "400px" }}>
      <h4>✅ Order Placed</h4>

      {/* ✅ Show bill details */}
      <pre className="text-start bg-light p-3 rounded" style={{ whiteSpace: "pre-wrap" }}>
        {billText}
      </pre>

      {/* ✅ QR Code */}
      <div id="qr-popup" className="my-3"></div>

      <button className="btn btn-primary" onClick={() => setShowQRModal(false)}>
        Close
      </button>
    </div>
  </div>
)}
    </>
  );
}

export default Cart;
