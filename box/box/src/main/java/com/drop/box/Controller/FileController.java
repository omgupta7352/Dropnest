package com.drop.box.Controller;


import com.drop.box.Entity.FileEntity;
import com.drop.box.Service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = "*")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<FileEntity> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        return ResponseEntity.ok(fileService.uploadFile(file));
    }

    @GetMapping
    public ResponseEntity<List<FileEntity>> listFiles() {
        return ResponseEntity.ok(fileService.getAllFiles());
    }

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String filename) throws Exception {
        Resource file = fileService.downloadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .body(file);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFile(@PathVariable Long id) {
        fileService.deleteFile(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/preview/{filename}")
    public ResponseEntity<Resource> previewFile(@PathVariable String filename) throws Exception {
        Resource file = fileService.downloadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
                .body(file);
    }

    // src/main/java/com/drop/box/controller/FileController.java
//    @GetMapping("/preview/{filename}")
//    public ResponseEntity<Resource> previewFile(@PathVariable String filename) throws Exception {
//        Resource file = fileService.downloadFile(filename);
//        // determine MIME type
//        String contentType = Files.probeContentType(file.getFile().toPath());
//        if (contentType == null) {
//            contentType = "application/octet-stream";
//        }
//        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
//                .contentType(MediaType.parseMediaType(contentType))
//                .body(file);
//    }


}

