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

## 🏁 Getting Started

### Prerequisites

* Java 17+
* Maven 3.6+
* Node.js & npm
* Git

### Backend Setup

1. Clone the repo:

   
bash
   git clone https://github.com/omgupta7352/Dropnest.git
   cd Dropnest/backend

2. Configure database in src/main/resources/application.properties:

   
properties
   ### MySQL
   ```
   # spring.datasource.url=jdbc:mysql://localhost:3306/dropnest
   # spring.datasource.username=root
   # spring.datasource.password=...
```
3. Build and run:

   
bash
```
   mvn clean install
   mvn spring-boot:run
```
4. Backend runs at http://localhost:8080

### Frontend Setup

1. Open a new terminal, navigate to frontend:

   
bash
```
   cd Dropnest/frontend
```

2. Install dependencies:

   
bash
```
   npm install
```
3. Start development server:

   
bash
   npm start

4. Frontend runs at http://localhost:3000

---

## 📡 API Endpoints

| Method | Endpoint                   | Description           |
| ------ | -------------------------- | --------------------- |
| POST   | /api/files/upload          | Upload a file         |
| GET    | /api/files                 | List all files        |
| GET    | /api/files/{filename}      | Download file by Name  |
| GET    | /api/preview/{filename}    | Preview file (inline) |
| DELETE | /api/files/{id}            | Delete file by ID     |



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





