import React from "react";
import dayjs from "dayjs";
import DemoNavbar from "components/Navbars/DemoNavbar";

const JobCard = () => {
  const skills = ["JavaScript", "React", "Node.js", "Backend"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2024-07-10", "days");

  return (
    <>
    <DemoNavbar/>
    <div style={styles.card}>
      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>Front-End Developer - Jupitech Techno</h1>
          <p style={styles.details}>
            Full Time &#x2022; Fresher &#x2022; In-Office &#x2022; Indore
          </p>
        </div>

        <div style={styles.skills}>
          {skills.map((skill, index) => (
            <p key={index} style={styles.skill}>
              {skill}
            </p>
          ))}
        </div>

        <div style={styles.footer}>
          <p style={styles.posted}>Posted: {diffInDays} Days ago.</p>
          <a href="#">
            <button style={styles.button}>Apply</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
  card: {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "30%", // Adjusted width to fit three cards in a row
    margin: "10px", // Margin to ensure spacing between cards
    boxSizing: "border-box",
    marginLeft :"40px",    
  },
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%", // Ensures the content stretches vertically
  },
  header: {
    marginBottom: "12px",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "4px",
  },
  details: {
    fontSize: "0.875rem",
    color: "#666",
  },
  skills: {
    display: "flex",
    gap: "8px",
    marginBottom: "12px",
    flexWrap: "wrap", // Allow skills to wrap if they exceed container width
  },
  skill: {
    padding: "4px 8px",
    backgroundColor: "#f0f0f0",
    color: "#666",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "0.875rem",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto", // Push footer to the bottom
  },
  posted: {
    fontSize: "0.875rem",
    color: "#666",
  },
  button: {
    padding: "8px 20px",
    border: "1px solid #007bff",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    textDecoration: "none",
    fontSize: "0.875rem",
  },
};

const JobCardContainer = () => {
  return (
    <div style={containerStyles}>
      {/* <JobCard /> */}
      <JobCard />
      {/* <JobCard /> */}
    </div>
  );
};

const containerStyles = {
  // display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start", // Ensures cards align at the top
  flexWrap: "wrap", // Ensures cards wrap if they exceed container width
  padding: "10px",
  boxSizing: "border-box",
  marginTop:"90px"
};

export default JobCardContainer;
