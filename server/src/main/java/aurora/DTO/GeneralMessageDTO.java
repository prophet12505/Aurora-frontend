package aurora.DTO;

import lombok.Data;

@Data
public class GeneralMessageDTO {
    private String message;
    private String operation;
    public GeneralMessageDTO(String message, String operation){
        this.message=message;
        this.operation=operation;
    }
}
