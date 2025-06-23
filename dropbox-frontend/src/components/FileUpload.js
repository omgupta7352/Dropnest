// // // // import React, { useState } from "react";
// // // // import axios from "axios";

// // // // const FileUpload = () => {
// // // //   const [file, setFile] = useState(null);
// // // //   const [message, setMessage] = useState("");

// // // //   const handleFileChange = (e) => {
// // // //     setFile(e.target.files[0]);
// // // //     setMessage("");
// // // //   };

// // // //   const handleUpload = async () => {
// // // //     if (!file) {
// // // //       setMessage("Please select a file first");
// // // //       return;
// // // //     }

// // // //     const formData = new FormData();
// // // //     formData.append("file", file);

// // // //     try {
// // // //       await axios.post("http://localhost:8080/api/files/upload", formData);
// // // //       setMessage("✅ File uploaded successfully!");
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       setMessage("❌ Upload failed");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg mx-auto mt-10">
// // // //       <h2 className="text-xl font-bold mb-4 text-center">Upload File</h2>

// // // //       <input
// // // //         type="file"
// // // //         accept=".txt,.jpg,.jpeg,.png,.json"
// // // //         onChange={handleFileChange}
// // // //         className="block w-full text-sm text-gray-500
// // // //                    file:mr-4 file:py-2 file:px-4
// // // //                    file:rounded-full file:border-0
// // // //                    file:text-sm file:font-semibold
// // // //                    file:bg-blue-50 file:text-blue-700
// // // //                    hover:file:bg-blue-100 mb-4"
// // // //       />

// // // //       <button
// // // //         onClick={handleUpload}
// // // //         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
// // // //       >
// // // //         Upload
// // // //       </button>

// // // //       {message && <p className="mt-4 text-center text-sm">{message}</p>}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FileUpload;

// // import React, { useState } from "react";
// // import axios from "axios";

// // const FileUpload = () => {
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleUpload = async () => {
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append("file", file);

// //     try {
// //       await axios.post("http://localhost:8080/api/files/upload", formData);
// //       alert("✅ Upload successful!");
// //       window.location.reload(); // Refresh to show in file list
// //     } catch (error) {
// //       alert("❌ Upload failed");
// //     }
// //   };

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow mb-8">
// //       <h2 className="text-lg font-semibold mb-4">⬆️ Upload a New File</h2>
// //       <div className="flex flex-col sm:flex-row items-center gap-4">
// //         <input
// //           type="file"
// //           onChange={handleFileChange}
// //           className="block w-full text-sm text-gray-500
// //                      file:mr-4 file:py-2 file:px-4
// //                      file:rounded-full file:border-0
// //                      file:text-sm file:font-semibold
// //                      file:bg-blue-50 file:text-blue-700
// //                      hover:file:bg-blue-100"
// //         />
// //         <button
// //           onClick={handleUpload}
// //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
// //         >
// //           Upload
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FileUpload;

// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // const FileUpload = () => {
// // //   const [file, setFile] = useState(null);
// // //   const [dragActive, setDragActive] = useState(false);
// // //   const [message, setMessage] = useState("");

// // //   const handleDrag = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     if (e.type === "dragenter" || e.type === "dragover") {
// // //       setDragActive(true);
// // //     } else if (e.type === "dragleave") {
// // //       setDragActive(false);
// // //     }
// // //   };

// // //   const handleDrop = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     setDragActive(false);
// // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // //       setFile(e.dataTransfer.files[0]);
// // //     }
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) return;

// // //     const formData = new FormData();
// // //     formData.append("file", file);

// // //     try {
// // //       await axios.post("http://localhost:8080/api/files/upload", formData);
// // //       setMessage("✅ File uploaded successfully!");
// // //       setFile(null);
// // //     } catch (error) {
// // //       console.error("Upload error", error);
// // //       setMessage("❌ Upload failed.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-white p-6 rounded-lg shadow mb-8">
// // //       <div
// // //         className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
// // //           dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
// // //         }`}
// // //         onDragEnter={handleDrag}
// // //         onDragLeave={handleDrag}
// // //         onDragOver={handleDrag}
// // //         onDrop={handleDrop}
// // //       >
// // //         <p className="text-gray-600 mb-2">📂 Drag & drop your file here</p>
// // //         <p className="text-sm text-gray-400">or</p>
// // //         <input
// // //           type="file"
// // //           onChange={handleFileChange}
// // //           className="hidden"
// // //           id="upload-input"
// // //         />
// // //         <label
// // //           htmlFor="upload-input"
// // //           className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
// // //         >
// // //           Browse Files
// // //         </label>
// // //       </div>

// // //       {file && (
// // //         <div className="mt-4 flex items-center justify-between">
// // //           <span className="text-sm text-gray-700 truncate max-w-xs">
// // //             📎 {file.name}
// // //           </span>
// // //           <button
// // //             onClick={handleUpload}
// // //             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// // //           >
// // //             Upload
// // //           </button>
// // //         </div>
// // //       )}

// // //       {message && (
// // //         <p className="mt-4 text-center text-sm text-green-700">{message}</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FileUpload;

// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // const FileUpload = () => {
// // //   const [file, setFile] = useState(null);
// // //   const [dragActive, setDragActive] = useState(false);
// // //   const [message, setMessage] = useState("");

// // //   const handleDrag = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     if (e.type === "dragenter" || e.type === "dragover") {
// // //       setDragActive(true);
// // //     } else if (e.type === "dragleave") {
// // //       setDragActive(false);
// // //     }
// // //   };

// // //   const handleDrop = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     setDragActive(false);
// // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // //       setFile(e.dataTransfer.files[0]);
// // //     }
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) return;

// // //     const formData = new FormData();
// // //     formData.append("file", file);

// // //     try {
// // //       await axios.post("http://localhost:8080/api/files/upload", formData);
// // //       setMessage("✅ File uploaded successfully!");
// // //       setFile(null);
// // //     } catch (error) {
// // //       console.error("Upload error", error);
// // //       setMessage("❌ Upload failed.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow">
// // //       <div
// // //         className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
// // //           dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
// // //         }`}
// // //         onDragEnter={handleDrag}
// // //         onDragLeave={handleDrag}
// // //         onDragOver={handleDrag}
// // //         onDrop={handleDrop}
// // //       >
// // //         <p className="text-gray-600 mb-2">📂 Drag & drop your file here</p>
// // //         <p className="text-sm text-gray-400">or</p>
// // //         <input
// // //           type="file"
// // //           onChange={handleFileChange}
// // //           className="hidden"
// // //           id="upload-input"
// // //         />
// // //         <label
// // //           htmlFor="upload-input"
// // //           className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
// // //         >
// // //           Browse Files
// // //         </label>
// // //       </div>

// // //       {file && (
// // //         <div className="mt-4 flex items-center justify-between">
// // //           <span className="text-sm text-gray-700 truncate max-w-xs">
// // //             📎 {file.name}
// // //           </span>
// // //           <button
// // //             onClick={handleUpload}
// // //             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// // //           >
// // //             Upload
// // //           </button>
// // //         </div>
// // //       )}

// // //       {message && (
// // //         <p className="mt-4 text-center text-sm text-green-700">{message}</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FileUpload;


// import React, { useState } from "react";
// import axios from "axios";

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [dragActive, setDragActive] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       setFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       await axios.post("http://localhost:8080/api/files/upload", formData);
//       setMessage("✅ File uploaded successfully!");
//       setFile(null);
//     } catch (error) {
//       console.error("Upload error", error);
//       setMessage("❌ Upload failed.");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow">
//       <div
//         className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
//           dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
//         }`}
//         onDragEnter={handleDrag}
//         onDragLeave={handleDrag}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//       >
//         <p className="text-gray-600 mb-2">📂 Drag & drop your file here</p>
//         <p className="text-sm text-gray-400">or</p>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="hidden"
//           id="upload-input"
//         />
//         <label
//           htmlFor="upload-input"
//           className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
//         >
//           Browse Files
//         </label>
//       </div>

//       {file && (
//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-sm text-gray-700 truncate max-w-xs">
//             📎 {file.name}
//           </span>
//           <button
//             onClick={handleUpload}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Upload
//           </button>
//         </div>
//       )}

//       {message && (
//         <p className="mt-4 text-center text-sm text-green-700">{message}</p>
//       )}
//     </div>
//   );
// };

// export default FileUpload;


import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://localhost:8080/api/files/upload", formData);
      alert("✅ File uploaded successfully!");
      setSelectedFile(null);
      window.location.reload(); // or call fetchFiles again if you're lifting state
    } catch (error) {
      console.error("Upload failed", error);
      alert("❌ Upload failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mb-6">
      <h2 className="text-lg font-semibold mb-4">📤 Upload a File</h2>

      {/* Drag & Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed p-6 text-center rounded cursor-pointer ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        {selectedFile ? (
          <p className="text-green-600 font-medium">{selectedFile.name}</p>
        ) : (
          <p className="text-gray-500">Drag & drop a file here</p>
        )}
      </div>

      {/* Traditional File Picker */}
      <div className="mt-4">
        <input
          type="file"
          accept=".txt,.png,.jpg,.jpeg,.json"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
