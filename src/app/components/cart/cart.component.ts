import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: Cart[] = [];
  totalAmount: number = 0

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadCartData();
  }

  loadCartData() {
    this.cartService.getCart().subscribe(
      (data) => {
        this.cartData = data;
        this.calculateTotalAmount();
        console.log("cartdata", this.cartData);
      },
      (error) => {
        console.log("error", error);
        // Handle error
      }
    );
  }

  calculateTotalAmount() {
    this.totalAmount = this.cartData[0].cartItems.reduce((total, cartItem) => {
      return total + (cartItem.product.price * cartItem.quantity);
    }, 0);
  }

  deleteFromCart(id: number) {
    this.cartService.removeFromCart(id).subscribe(
      (data) => {
        console.log("deleted", data);
        this.calculateTotalAmount();
        this.toastr.success("Product removed from cart");
        // Reload the component
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['.'], { relativeTo: this.route });
      }
    );
  }

  increaseCartQuantity(id: number) {
    this.cartService.increaseCartQuantity(id).subscribe(
      (data) => {
        console.log("increased", data);
        this.calculateTotalAmount();
        this.toastr.success("Product quantity increased");
        // Reload the component
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['.'], { relativeTo: this.route });
      }
    );
  }
  decreaseCartQuantity(id: number) {
    this.cartService.decreaseCartQuantity(id).subscribe(
      (data) => {
        console.log("increased", data);
        this.calculateTotalAmount();
        this.toastr.success("Product quantity decreased");
        // Reload the component
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['.'], { relativeTo: this.route });
      }
    );
  }

  checkout() {
    this.orderService.orderItems().subscribe(
      (data) => {
        this.toastr.success("Order placed successfully");
        this.router.navigate(['/orders'], { relativeTo: this.route });
      }
    );
  }

  showSuccess() {
    this.toastr.success('This is a success message', 'Success');
  }
  
  showError() {
    this.toastr.error('This is an error message', 'Error');
  }
  
  showInfo() {
    this.toastr.info('This is an info message', 'Info');
  }
  
  showWarning() {
    this.toastr.warning('This is a warning message', 'Warning');
  }
  
}
