// import React from "react";
// import pdf from '../../public/assets/Gliptoza_Pen_How_To_Use_(1).pdf'

// const PdfViewer2 = () => {
    
//   return (
//     <div style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
//       <embed
//         src='../../public/assets/Gliptoza_Pen_How_To_Use_(1).pdf'
//         style={{ width: "100%", height: "100vh", border: "none", position: 'absolute' }}
//         title="PDF Viewer"
//       ></embed>
//     </div>
//   );
// };

// export default PdfViewer2;
import React from "react";

const PdfViewer2 = () => {
  const pdfPath = "/assets/GLIPTOZA PATIENT SUPPORT.pdf"; // Correct way to reference a file in `public/`

  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Embedded PDF Viewer */}
      <h1>Comming soon</h1>
      {/* <embed
        src={pdfPath}
        style={{ width: "100%", height: "100vh", border: "none", position: "absolute" }}
        title="PDF Viewer"
        type="application/pdf"
      /> */}

      {/* Fallback: Button to Open in a New Tab */}
      {/* <div style={{ position: "absolute", top: 10, right: 10 }}>
        <button onClick={() => window.open(pdfPath, "_blank")} style={{ padding: "10px", fontSize: "16px" }}>
          Open PDF in New Tab
        </button>
      </div> */}
    </div>
  );
};

export default PdfViewer2;

