package com.drop.box.Service;

import com.drop.box.Entity.FileEntity;
import com.drop.box.Repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private StorageService storageService;

    private final List<String> allowedTypes = List.of("text/plain", "image/jpeg", "image/png", "application/json");

    public FileEntity uploadFile(MultipartFile file) throws IOException {
        if (!allowedTypes.contains(file.getContentType())) {
            throw new IllegalArgumentException("Unsupported file type");
        }

        String path = storageService.save(file);
        FileEntity fileEntity = new FileEntity();
        fileEntity.setFilename(file.getOriginalFilename());
        fileEntity.setFileType(file.getContentType());
        fileEntity.setFilePath(path);
        fileEntity.setSize(file.getSize());
        fileEntity.setUploadedAt(LocalDateTime.now());

        return fileRepository.save(fileEntity);
    }

    public List<FileEntity> getAllFiles() {
        return fileRepository.findAll();
    }

    public Resource downloadFile(String filename) throws Exception {
        fileRepository.findByFilename(filename)
                .orElseThrow(() -> new FileNotFoundException("File not found"));
        return storageService.loadAsResource(filename);
    }

    public void deleteFile(Long id) {
        FileEntity fileEntity = fileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("File not found with id " + id));
        try {
            Files.deleteIfExists(Paths.get(fileEntity.getFilePath()));
            fileRepository.deleteById(id);
        } catch (IOException e) {
            throw new RuntimeException("Error deleting file", e);
        }
    }

}

