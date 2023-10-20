import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { OrderItem } from 'src/app/model/order';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData: OrderItem[] = [];
  totalAmount: number = 0;

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadCartData();
  }

  loadCartData() {
    this.orderService.getOrders().subscribe(
      (data: any) => {
        this.orderData = data.orders;
        // this.calculateTotalAmount();
        console.log("cartdata", this.orderData);
      },
      (error) => {
        console.log("error", error);
        // Handle error
      }
    );
  }
}
