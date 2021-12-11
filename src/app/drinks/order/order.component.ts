import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  inForm: FormGroup;
  title = 'Order List';
  modTitle = '';
  id = undefined;
  listData = [];
  isVisible = false;

  constructor(private fb: FormBuilder, private modal: NzModalService) {
  }

  // create / Add record
  createRecord(): void {
    this.modTitle = 'Add New Order';
    this.loadForm({signed: undefined, expires: undefined});
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // load form for Add / Edit records
  loadForm(data): void {
    this.inForm = this.fb.group({
      item: [data.item, [Validators.required]],
      price: [data.price, [Validators.required]],
      note: [data.note],
      status: ['Active'],
    });
    this.isVisible = true;
  }

  // submit form for add / edit records
  submitForm(): void {
    const formData = this.inForm.value;
    const obj = { status: formData.status, item: formData.item, price: formData.price, note: formData.note };
    if (this.id) {
      obj['id'] = this.id;
      const index = this.listData.findIndex(item => item.id === this.id);
      Object.assign(this.listData[index], obj);
    } else {
      obj['id'] = Math.floor(Math.random() * 100000);
      this.listData = [...this.listData, obj];
    }
    this.isVisible = false;
  }

  // edit record
  editRecord(id): void {
    this.id = id;
    this.modTitle = 'Edit Order';
    const data = this.listData.filter(value => value.id === id)[0];
    this.loadForm(data);
  }

  // delete record
  deleteRecord(id): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete this item?</i>',
      nzOnOk: () => {
        this.listData = this.listData.filter(d => d.id !== id);
      }
    });
  }
}
