import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';

import { ProductDetailedViewComponent } from './product-detailed-view.component';
class MockServices {
  postCart() {
    let data = [
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating: '3.9',
        total: 109.95,
        quantity: 1,
      },
    ];
    return of(data);
  }
 
}
class MockServicesApi{
  getProductById(){
    let productData=[
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating: '3.9',
        total: 109.95,
        quantity: 1,
      },
    ]
    return of(productData)
  }
  getProduct(){
    let getProd=[
      {
        id: 1,
        title: 'Laptop Bag',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'laptop bag',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
        rating: '3.9',
        total: 109.95,
        quantity: 1,
      },
    ]
    return of(getProd)
  }
}
describe('ProductDetailedViewComponent', () => {
  let component: ProductDetailedViewComponent;
  let fixture: ComponentFixture<ProductDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailedViewComponent],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [
        ProductDetailedViewComponent,
        { provide: ProductCartService, useClass: MockServices },
        {provide:ApiService,useClass:MockServicesApi}
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check post product cart', () => {
    let postData = {
      id: 1,
      title: 'Laptop Bag',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: 'laptop bag',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Ffossil-brown-leather-laptop-bag-LAPTOPBAGS0220.jpg',
      rating: '3.9',
      total: 109.95,
      quantity: 1,
    };

    component.postProductCart(postData);
    expect(component.postProductCart).not.toEqual("")
  });
  it("should check getProductById",()=>{
    spyOn(component,'getProduct')
    component.getProductById();
    expect(component.getProductById).not.toEqual("")
    expect(component.getProduct).toHaveBeenCalled();
  })
});
