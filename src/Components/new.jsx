import React from "react";

const PdfViewer3 = () => {
  const pdfUrl = "../../public/assets/Gliptoza_Pen_How_To_Use_(1).pdf"; // Ensure it's in `public/`

  return (
    <div>
      <h1>PDF Viewer</h1>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        Click here to view the PDF
      </a>
    </div>
  );
};

export default PdfViewer3;
