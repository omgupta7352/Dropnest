import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/files");
      setFiles(res.data);
      console.log("Fetched files:", res.data); // ✅ Confirm this logs correctly
    } catch (error) {
      console.error("Error fetching files", error);
    }
  };

  const handleDownload = async (filename) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/files/${filename}`, {
      responseType: "blob",
    });

    const blob = new Blob([res.data]);
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    // Clean up
    link.remove();
    window.URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("Download failed", error);
  }
};

const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/files/${id}`);
      fetchFiles(); // refresh list
    } catch (error) {
      console.error("Delete failed", error);
    }
  };


  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">📂 Uploaded Files</h2>
      <ul className="divide-y divide-gray-200">
        {files.map((file) => (
          <li
  key={file.id}
  className="py-2 flex items-center bg-gray-50 px-4 rounded hover:bg-gray-100"
>
  {/* 1. File name on the left */}
  <Link
    to={`/preview/${file.filename}`}
    className="text-blue-500 hover:underline"
  >
    {file.filename}
  </Link>

  {/* 2. Button group on the right */}
  <div className="ml-auto flex space-x-2">
    <button
      onClick={() => handleDownload(file.filename)}
      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
    >
      Download
    </button>

    <button
      onClick={() => handleDelete(file.id)}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete
    </button>
  </div>
</li>

        ))}
      </ul>
    </div>
  );
};

export default FileList;

