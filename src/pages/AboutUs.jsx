import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌿 About Us 🌿</h1>
      <p style={styles.text}>
        Welcome to <span style={styles.brand}>Madhav’s Kitchen</span> – where tradition meets health.  
      </p>
      <p style={styles.text}>
        At Madhav’s Kitchen, we believe that snacks should be both tasty and guilt-free. 
        Inspired by timeless Indian flavors, we bring you a healthier way to enjoy your favorite 
        treats without compromising on taste. 🍴💚
      </p>

      <h2 style={styles.subHeading}>✨ Our Specialties ✨</h2>
      <ul style={styles.list}>
        <li>🥨 Nimki Mathri – a classic, crunchy delight.</li>
        <li>🌟 Special Pinjra Mathri – our unique twist for snack lovers.</li>
        <li>🥗 Oats Mathri – perfect for diet & fitness lovers.</li>
        <li>🔥 Air-Fried Mathri – a lighter, wholesome option for guilt-free indulgence.</li>
      </ul>

      <h2 style={styles.subHeading}>🌶 Flavoured Mathri Collection 🌶</h2>
      <ul style={styles.list}>
        <li>🌶 Chilli Flakes Oats Mathri – for a spicy, crunchy kick.</li>
        <li>🍛 Masala Mathri – full of traditional Indian spices.</li>
        <li>🌿 Herbed Mathri – flavored with aromatic herbs for a unique taste.</li>
      </ul>

      <p style={styles.text}>
        Every bite from <span style={styles.brand}>Madhav’s Kitchen</span> carries the goodness of 
        quality ingredients, made with ❤️ and care, ensuring you enjoy authentic flavors 
        with a modern healthy touch.
      </p>

      <p style={styles.text}>
        🚚 With <b>Pan-India delivery</b>, we make sure your favorite healthy snacks 
        reach your doorstep, fresh and full of taste.
      </p>

      <h3 style={styles.closing}>
        Because at Madhav’s Kitchen, we’re not just delivering snacks – 
        we’re delivering <span style={styles.highlight}>health, happiness, and tradition. 🌸</span>
      </h3>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fffaf0",
    color: "#333",
    lineHeight: "1.8",
    maxWidth: "900px",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2e8b57",
  },
  subHeading: {
    fontSize: "1.8rem",
    marginTop: "25px",
    color: "#ff5722",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "15px",
  },
  list: {
    fontSize: "1.1rem",
    marginLeft: "20px",
    marginBottom: "15px",
  },
  brand: {
    fontWeight: "bold",
    color: "#e65100",
  },
  closing: {
    fontSize: "1.3rem",
    marginTop: "30px",
    textAlign: "center",
    fontStyle: "italic",
  },
  highlight: {
    color: "#d32f2f",
    fontWeight: "bold",
  },
};

export default AboutUs;
