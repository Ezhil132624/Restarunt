import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Magic Masala</Typography>
        <p>
        Step into Magic Masala, where the vibrant flavors of India come alive on your plate. Our restaurant is a celebration of India's rich culinary heritage, offering a diverse menu that captures the essence of traditional and contemporary Indian cuisine.
        </p>
        <br />
        <p>At Magic Masala, we believe in the magic of spices and the art of cooking. Our chefs meticulously craft each dish using authentic spices and the freshest ingredients to ensure an unforgettable dining experience. From the fiery flavors of our signature curries to the delicate tastes of our tandoori specialties, every dish tells a story of India's diverse food culture.</p>
        <br />
        <p>
        Start your meal with our delectable appetizers like crispy samosas and tangy pani puri, which set the stage for the flavorful journey ahead. Indulge in our main courses, where you can find everything from rich butter chicken to creamy paneer tikka masala, each cooked to perfection. For our vegetarian patrons, we offer a variety of dishes that showcase the best of India's plant-based cuisine, ensuring there is something for everyone.
        </p>
        <br />
        <p>Don't forget to try our freshly baked naan and aromatic biryanis, which complement our curries beautifully. And to end your meal on a sweet note, we have a selection of traditional Indian desserts like gulab jamun and rasmalai that will leave you craving for more.</p>
        <br />
        <p>At Magic Masala, we strive to create an ambiance that reflects the warmth and hospitality of India. Our décor is inspired by Indian culture, featuring vibrant colors and intricate designs that provide the perfect setting for a memorable dining experience.</p>
        <br />
        <p>Whether you're here for a family dinner, a romantic evening, or a celebration with friends, Magic Masala promises a magical experience filled with delicious food, exceptional service, and the enchanting flavors of India. Come, savor the magic of Indian cuisine at Magic Masala!</p>
      </Box>
    </Layout>
  );
};

export default About;
