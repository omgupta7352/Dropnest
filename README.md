# 📁 DropNest

Secure, lightweight Dropbox-like application for uploading, previewing, downloading, and managing files.

---

## 🚀 Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Architecture](#architecture)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Backend Setup](#backend-setup)  
   - [Frontend Setup](#frontend-setup)  
5. [API Endpoints](#api-endpoints)  
6. [Usage](#usage)  
7. [Screenshots](#screenshots)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## 🌟 Features

- **File Upload:** Drag-and-drop or browse local files  
- **File Listing:** View all uploaded files in a clean interface  
- **File Preview:** Inline preview for images (`.png`, `.jpg`) and text (`.txt`, `.json`)  
- **Download:** Download files with a single click  
- **Delete:** Remove unwanted files permanently  
- **Type Restrictions:** Only `.txt`, `.png`, `.jpg`, `.jpeg`, `.json` allowed  
- **Responsive Design:** Mobile-friendly Tailwind CSS UI  

---

## 🛠 Tech Stack

- **Backend:** Java, Spring Boot, Spring Data JPA, H2/MySQL, Local File System  
- **Frontend:** React, React Router, Axios, Tailwind CSS  
- **Build:** Maven (backend), npm (frontend)  
- **Version Control:** Git, GitHub  

---

## 🏗 Architecture

```
┌─────────┐          ┌──────────────┐   HTTP   ┌─────────────┐
│Browser  │◀────────▶│React Frontend│◀────────▶│Spring Boot│
│ (UI)    │   REST   │ (Tailwind)   │   API    │  Backend    │
└─────────┘          └──────────────┘          └─────────────┘
```

---

## 📖 Usage

1. Navigate to http://localhost:3000
2. Drag & drop or click **Browse Files** to select a file
3. Click **Upload**
4. View your uploaded file in the list
5. Click **Preview** to view inline, **Download** to save locally, or **Delete** to remove

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/YourFeature)
3. Commit changes (git commit -m 'Add feature')
4. Push to branch (git push origin feature/YourFeature)
5. Open a Pull Request





