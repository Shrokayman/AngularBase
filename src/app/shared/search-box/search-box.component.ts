import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  public searchTerm: string = '';

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.productService.search.next(this.searchTerm)
  }

}
