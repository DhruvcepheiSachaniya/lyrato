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
// import React from "react";

// const PdfViewer2 = () => {
//   const pdfPath = "/assets/LYRATO BOOKLET_1A (1).pdf"; // Correct way to reference a file in `public/`

//   return (
//     <div style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
//       {/* Embedded PDF Viewer */}
//       {/* <h1>Comming soon</h1> */}
//       <embed
//         src={pdfPath}
//         style={{ width: "100%", height: "100vh", border: "none", position: "absolute" }}
//         title="PDF Viewer"
//         type="application/pdf"
//       />

//       {/* Fallback: Button to Open in a New Tab */}
//       <div style={{ position: "absolute", top: 10, right: 10 }}>
//         <button onClick={() => window.open(pdfPath, "_blank")} style={{ padding: "10px", fontSize: "16px" }}>
//           Open PDF in New Tab
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PdfViewer2;
import React from "react";
import YouTube from "react-youtube";

const PdfViewer2 = () => {
  const pdfPath = "/assets/LYRATO BOOKLET_1A (1).pdf"; // PDF path

  // YouTube Player Options
  const videoOptions = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0, // Set to 1 for autoplay
      controls: 1,
      modestbranding: 1, // Hides the YouTube logo
      rel: 0, // Prevents related videos from showing
    },
  };

  return (
    // <div style={{ 
    //   margin: 0, padding: 0, height: "100vh", 
    //   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    //   background: "#f4f4f4" // Light background for contrast
    // }}>
    <div style={{ margin: 0, padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#f0f0f0", padding: "10px", textAlign: "center", borderBottom: "1px solid #ccc" }}>
        <img height={'130px'} src="/assets/Lyrato_new_img.png" alt="Logo A" />
      </div>
      
      {/* Background Bar */}
      <div style={{
        width: "100%",
        // maxWidth: "900px", // Set max width
        // height: "300px", // Background Bar Height
        // background: "#333", // Dark color for contrast
        borderRadius: "10px", // Rounded corners
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
        marginTop: "90px"
      }}>
        
        {/* YouTube Player */}
        <div style={{ width: "95%", maxWidth: "600px", height: '300px',border: '2px solid black', borderRadius: '5px' }}>
          <YouTube videoId="CZHtZP39AOw?si=4mlkXiN3L2ErSX3v" opts={videoOptions} />
        </div>
      </div>

      {/* Button to Open PDF in a New Tab */}
      <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "10px", flex: 1 }}>
        <button
          onClick={() => window.open(pdfPath, "_blank")}
          style={{
            padding: "12px 24px", fontSize: "18px", cursor: "pointer",
            background: "#007bff", color: "#fff", border: "none", borderRadius: "5px"
          }}
        >
          View PDF
        </button>
      </div>
      
      {/* Footer */}
      <div style={{ backgroundColor: "#f0f0f0", textAlign: "center", borderTop: "1px solid #ccc", padding: "10px", marginTop: "auto" }}>
        <p style={{ color: '#2E2E33' }}>
          Lyrato | copyright {(new Date().getFullYear())}© Eris Lifescience Ltd
        </p>
      </div>
    </div>
  );
};

export default PdfViewer2;