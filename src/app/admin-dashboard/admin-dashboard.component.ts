import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { FileUploader } from 'ng2-file-upload';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { MatDialog } from '@angular/material';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public productService: ProductService, public loginService: LoginService, public dialog: MatDialog) { }

  //  Lista proizvoda za nasu kompaniju
  listOfProduct: any = [];
  company = null;

  companyTitle;
  companyAddress;
  companyCity;
  companyID;


  ngOnInit() {
    this.getAllProducts();
    this.findCompany();
  }

  // Servis koji vraca podatke u kompaniji
  findCompany() {
    this.loginService.getCompanyById(localStorage.getItem("idCompany")).subscribe(data => {

      this.companyID = data['idCompany']
      this.companyTitle = data['title'];
      this.companyAddress = data['idUserAddress']['address'];
      this.companyCity = data['idUserAddress']['city'];

    })
  }

  // Otvaranje dijaloga za dodavanje proizvoda
  openAddProductDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: 'auto',
      backdropClass: 'addProduct'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts()
    });
  }

  // Otvaranje dijalog za preview proizvoda
  openProductDetailDialog(product): void {
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      width: 'auto',
      backdropClass: 'addProduct',
      data: { product: product }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts()
    });
  }

  // Otvranje dijaloga za izmenu proizvoda
  openEditProductDialog(product): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: 'auto',
      backdropClass: 'addProduct',
      data: { product: product }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts()
    });
  }

   /**
   * Ukoliko smo se ulogovali uspesno,nas id ce biti 
   * prosledje servisu koji u zavisnosti od njega
   * pronalazi sve proizvode nase kompanije
   */
  getAllProducts() {
    this.productService.getProductByCompanyId(localStorage.getItem("idCompany")).subscribe(data => {
      this.listOfProduct = data;
    })
  }


  // Servis za brisanje proizvoda
  deleteProduct(idProduct) {
    this.productService.deleteProduct(idProduct).subscribe(data => {
      console.log(data);

      this.getAllProducts();

    })
  }



  productColumns: string[] = ['code', 'title', 'amount', 'price', 'option'];

}
