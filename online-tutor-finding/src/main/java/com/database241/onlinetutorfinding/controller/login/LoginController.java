
package com.database241.onlinetutorfinding.controller.login;

import com.database241.onlinetutorfinding.entity.user.SystemUser;
import com.database241.onlinetutorfinding.repository.SystemUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

// DTO để nhận dữ liệu từ phía client
class LoginRequest {
    private String phoneNumber;
    private String password;
     
    // Getter và Setter
    public String getPhoneNumber() {
        return phoneNumber;

    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

@RestController
@RequestMapping("api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class LoginController {

    private final SystemUserRepository systemUserRepository;

    // Phương thức đăng nhập
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String phoneNumber = loginRequest.getPhoneNumber();
        String password = loginRequest.getPassword();

        System.out.println("Phone Number: " + phoneNumber);
        System.out.println("Password: " + password);

        Optional<SystemUser> userOpt = systemUserRepository.findByPhoneNumber(phoneNumber);

        // Kiểm tra nếu người dùng không tồn tại
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        // Lấy đối tượng người dùng từ Optional
        SystemUser user = userOpt.get();

        // Kiểm tra mật khẩu đã mã hóa
        if (user.getPassword().equals(sha1Hash(password))) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    // Phương thức mã hóa SHA-1
    private String sha1Hash(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            byte[] messageDigest = md.digest(input.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : messageDigest) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}
