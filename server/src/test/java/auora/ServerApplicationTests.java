package auora;

import aurora.ServerApplication;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = {ServerApplication.class})
class ServerApplicationTests {

    @Test
    void contextLoads() {

        System.out.println("success!");
    }

}
