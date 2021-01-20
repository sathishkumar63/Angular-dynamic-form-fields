import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserOrderDetailsComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.orderForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.orderForm = this.initializeOrderForm();
  }

  initializeOrderForm(): FormGroup {
    return this.formBuilder.group({
      orderItems: this.formBuilder.array([this.createOrderItem()]),
    });
  }

  createOrderItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: [null, Validators.required],
    });
  }

  get orderItemFormGroups(): FormArray {
    return this.orderForm.get('orderItems') as FormArray;
  }

  addOrderItem(): void {
    this.orderItemFormGroups.push(this.createOrderItem());
  }

  removeOrderItem(i: number): void {
    this.orderItemFormGroups.removeAt(i);
  }
}
