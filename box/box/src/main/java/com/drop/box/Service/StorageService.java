package com.drop.box.Service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.*;

@Service
public class StorageService {

    private final Path rootLocation = Paths.get("uploads");

    public StorageService() throws IOException {
        Files.createDirectories(rootLocation);
    }

    public String save(MultipartFile file) throws IOException {
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        Path destination = rootLocation.resolve(filename);
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return destination.toString();
    }

    public Resource loadAsResource(String filename) throws MalformedURLException {
        Path file = rootLocation.resolve(filename);
        return new UrlResource(file.toUri());
    }
}

