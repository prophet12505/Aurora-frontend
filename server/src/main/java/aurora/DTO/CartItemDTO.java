package aurora.DTO;

import aurora.entity.CartItem;
import aurora.entity.Product;
import jakarta.persistence.Column;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CartItemDTO {
    //id of cart items

   public CartItemDTO( CartItem cartItem,Product product) {
      this.product = product;
      this.cartItem = cartItem;
   }

   Product product;
   CartItem cartItem;

}
