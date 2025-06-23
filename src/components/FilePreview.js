import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const FilePreview = () => {
  const { filename } = useParams();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/files/preview/${filename}`);
        if (!response.ok) throw new Error("Failed to fetch preview");

        const blob = await response.blob();
        setPreviewUrl(URL.createObjectURL(blob));
      } catch (err) {
        setError("Preview not available.");
      }
    };
    fetchPreview();
  }, [filename]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">🔍 File Preview</h2>

      {error && <p className="text-red-500">{error}</p>}

      {previewUrl && (
        <>
          {filename.endsWith(".png") || filename.endsWith(".jpg") || filename.endsWith(".jpeg") ? (
            <img src={previewUrl} alt="Preview" className="max-w-full rounded shadow" />
          ) : filename.endsWith(".txt") || filename.endsWith(".json") ? (
            <iframe
              src={previewUrl}
              title="Text Preview"
              className="w-full h-[500px] border rounded"
            ></iframe>
          ) : (
            <p className="text-gray-600">Preview not supported for this file type.</p>
          )}
        </>
      )}

      <div className="mt-6">
        <Link to="/" className="text-blue-500 hover:underline">
          ⬅ Back to File List
        </Link>
      </div>
    </div>
  );
};

export default FilePreview;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const FilePreview = () => {
//   const { filename } = useParams();
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [fileType, setFileType] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchFile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/api/files/${filename}`, {
//           responseType: "blob",
//         });

//         const type = res.data.type;
//         setFileType(type);

//         if (type.startsWith("image/") || type.startsWith("text/")) {
//           const url = URL.createObjectURL(res.data);
//           setPreviewUrl(url);
//         } else {
//           setError("Preview not available.");
//         }
//       } catch (err) {
//         setError("Failed to load preview.");
//         console.error(err);
//       }
//     };

//     fetchFile();
//   }, [filename]);

//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div className="p-6 text-center">
//       <h2 className="text-2xl font-semibold mb-4">📄 File Preview: {filename}</h2>
//       {fileType.startsWith("image/") && (
//         <img src={previewUrl} alt="preview" className="mx-auto max-h-96 rounded shadow" />
//       )}
//       {fileType.startsWith("text/") && (
//         <iframe
//           src={previewUrl}
//           title="text preview"
//           className="w-full h-96 border rounded"
//         />
//       )}
//     </div>
//   );
// };

// export default FilePreview;


// src/components/FilePreview.js
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// const FilePreview = () => {
//   const { filename } = useParams();
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [mimeType, setMimeType] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadPreview = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:8080/api/files/preview/${filename}`,
//           { responseType: "blob" }
//         );
//         // read MIME type from headers
//         const type = res.headers["content-type"];
//         setMimeType(type);

//         // only preview images/text
//         if (type.startsWith("image/") || type.startsWith("text/")) {
//           const url = URL.createObjectURL(res.data);
//           setPreviewUrl(url);
//         } else {
//           setError("Preview not available for this file type.");
//         }
//       } catch (e) {
//         console.error(e);
//         setError("Failed to load preview.");
//       }
//     };

//     loadPreview();

//     // cleanup URL
//     return () => previewUrl && URL.revokeObjectURL(previewUrl);
//   }, [filename]);

//   if (error) {
//     return (
//       <div className="p-6 text-center">
//         <p className="text-red-500">{error}</p>
//         <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
//           ← Back
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">🔍 Preview: {filename}</h1>
//       {!previewUrl ? (
//         <p className="text-gray-600">Loading preview…</p>
//       ) : mimeType.startsWith("image/") ? (
//         <img src={previewUrl} alt={filename} className="w-full rounded" />
//       ) : (
//         <iframe
//           src={previewUrl}
//           title={filename}
//           className="w-full h-96 border rounded"
//         />
//       )}
//       <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
//         ← Back to files
//       </Link>
//     </div>
//   );
// };

// export default FilePreview;
