package aurora.DTO;

import lombok.Data;

@Data
public class GeneralMessageDTO {
    public GeneralMessageDTO(String message, String operation, Boolean operationSuccess) {
        this.message = message;
        this.operation = operation;
        this.operationSuccess = operationSuccess;
    }

    private String message;
    private String operation;
    private Boolean operationSuccess;
    public GeneralMessageDTO(String message, String operation){
        this.message=message;
        this.operation=operation;
        this.operationSuccess=true;
    }
}
