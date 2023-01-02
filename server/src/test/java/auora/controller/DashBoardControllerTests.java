package auora;
import static org.assertj.core.api.Assertions.assertThat;
import aurora.DTO.CreateProductDTO;
import aurora.DTO.GeneralMessageDTO;
import aurora.controller.DashBoardController;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;

//@RunWith(SpringRunner.class)
@SpringBootTest(classes = {DashBoardController.class})
public class DashBoardControllerTests {



    @Test
    public void testCreateAProduct() {
        // Create a request
        TestRestTemplate restTemplate=new TestRestTemplate();
        System.out.println("testCreateAProduct");
        CreateProductDTO createProductDTO = new CreateProductDTO();
        // Set the values for the request body
        createProductDTO.setName("Mini PC, Beelink Mini S I");
        createProductDTO.setDescription("【Smooth & Light weight】Beelink MINI S Mini PC comes with Intel 11th Gen 4-Cores N5095(up to 2.9GHz), preinstalled with Windows 11 Pro, and supports Linux operating system.");
        createProductDTO.setBrand("Beelink");
        createProductDTO.setPrice("0.1");
        createProductDTO.setCategory(Arrays.asList("item1", "item2", "item3"));
        createProductDTO.setUnitsInStock(99);
        createProductDTO.setImage("image default");
        // Send a POST request to the API
        ResponseEntity<GeneralMessageDTO> response = restTemplate.postForEntity("/create-a-product", createProductDTO, GeneralMessageDTO.class);
        // Verify that the response has a 200 OK status
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        // Verify that the response body contains the expected data
        GeneralMessageDTO message = response.getBody();
        assertThat(message.getMessage()).isEqualTo("create product success");
        assertThat(message.getOperation()).isEqualTo("create-a-product");
    }
}