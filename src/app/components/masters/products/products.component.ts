import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductmasterService } from '../../../services/productmaster.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productmaster!: FormGroup;
  constructor(private fb: FormBuilder, private service: ProductmasterService) { }

  ngOnInit(): void {

    this.productmaster = this.fb.group({
      productname: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      productimage: ['', Validators.required],
      category: ['', Validators.required]
    })
  }
  saveproduct() {
   // this.service.addregister(JSON.stringify(this.register.value)).subscribe(res => { alert(res.toString()); });
  }
}
