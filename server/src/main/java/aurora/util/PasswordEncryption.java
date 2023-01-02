package aurora.util;
import org.springframework.security.crypto.codec.Hex;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordEncryption {
    public static String encrypt(String password) throws NoSuchAlgorithmException {
        // Generate a hash of the password

        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));

// Convert the hash to a hexadecimal string
        String hashString = new String(Hex.encode(hash));
        return hashString;
    }
}
