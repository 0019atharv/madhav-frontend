import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        background: "#fff3e6",
        borderRadius: "15px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#e67e22" }}>📞 Contact Us</h1>
      <p style={{ fontSize: "18px", color: "#444", textAlign: "center" }}>
        Have questions, feedback, or just want to say hello?  
        We’d love to hear from you! 💌
      </p>

      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#d35400" }}>📍 Our Address</h2>
        <p>C7, 1606 Supertech EcoVillage 2,  
        Noida – 201306</p>

        <h2 style={{ color: "#d35400" }}>📧 Email Us</h2>
        <p>
          <a href="mailto:support@madhavkitchen.com" style={{ color: "#e67e22", textDecoration: "none" }}>
            madhavskitchen.me@gmail.com
          </a>
        </p>

        <h2 style={{ color: "#d35400" }}>📱 Call Us</h2>
        <p>
          <a href="tel:+918527159685" style={{ color: "#e67e22", textDecoration: "none" }}>
            +91 8527159685
          </a>
        </p>

        <h2 style={{ color: "#d35400" }}>🌐 Follow Us</h2>
        <p>
          <a href="https://instagram.com/madhavskitchen.me" target="_blank" rel="noreferrer" style={{ marginRight: "15px", color: "#e4405f", fontWeight: "bold" }}>Instagram</a>
          <a href="https://facebook.com/madhavskitchen.me" target="_blank" rel="noreferrer" style={{ marginRight: "15px", color: "#3b5998", fontWeight: "bold" }}>Facebook</a>
          {/* <a href="https://twitter.com/madhavskitchen" target="_blank" rel="noreferrer" style={{ color: "#1da1f2", fontWeight: "bold" }}>Twitter</a> */}
        </p>
      </div>

      <p style={{ marginTop: "40px", textAlign: "center", color: "#555" }}>
        ✨ We’re always here to make your snacking experience better.  
        Don’t hesitate to reach out! 💖
      </p>
    </div>
  );
};

export default ContactUs;
