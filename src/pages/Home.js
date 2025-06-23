// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FileUpload from "../components/FileUpload";
// import FileList from "../components/FileList";
// import FilePreview from "../components/FilePreview";

// const Home = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="min-h-screen bg-gray-100">
//               <h1 className="text-4xl font-bold text-center py-6 mb-4">📁 DropNest</h1>
//               <FileUpload />
//               <FileList />
//             </div>
//           }
//         />
//         <Route path="/preview/:filename" element={<FilePreview />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Home;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";
import FilePreview from "../components/FilePreview";

const Home = () => {
  return (
    <Router>
      {/* Full-screen gradient backdrop */}
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-2">📁 DropNest</h1>
            <p className="text-gray-600">
              Securely upload, preview, download, and manage your files.
            </p>
          </header>

          {/* Translucent white card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FileUpload />
                    <FileList />
                  </>
                }
              />
              <Route path="/preview/:filename" element={<FilePreview />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
