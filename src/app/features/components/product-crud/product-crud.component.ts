import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProductDto, OperationType } from '../../models/iproduct';
import { ProductService } from '../../service/product-service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-crud',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCrudComponent implements OnInit {
  private modelSubject = new BehaviorSubject<IProductDto>(
    this.getEmptyProduct()
  );

  products$!: Observable<IProductDto[]>;
  products: IProductDto[] = [];
  model$ = this.modelSubject.asObservable();

  constructor(
    private productService: ProductService,
    private $cd: ChangeDetectorRef
  ) {
    const name = 'Angular';

  }

  ngOnInit(): void {
    this.products$ = this.productService.getAll().pipe(
      tap((products: IProductDto[]) => {
        this.products = products.filter((x) => x.isDeleted == false);
      })
    );
  }

  private getEmptyProduct(): IProductDto {
    return {
      id: 0,
      title: '',
      description: '',
      price: 0,
      isValid: true,
      operationType: OperationType.Create,
    };
  }

  save(): void {
    const opertionalType =
      this.modelSubject.value.id === 0
        ? OperationType.Create
        : OperationType.Update;
    const obs$ = this.productService.save({
      ...this.modelSubject.value,
      operationType: opertionalType,
      isValid: true,
    });

    obs$
      .pipe(
        tap((res: IProductDto) => {
          if (opertionalType === OperationType.Create) {
            this.products.push(res);
          } else {
            const index = this.products.findIndex((p) => p.pkId === res.pkId);
            this.products[index] = res;
          }
          this.products$ = of([...this.products]);
          this.$cd.detectChanges();
          this.modelSubject.next(this.getEmptyProduct());
        })
      )
      .subscribe();
  }

  saveAsDraft(): void {
    const opertionalType =
      this.modelSubject.value.id === 0
        ? OperationType.Create
        : OperationType.Update;
    const obs$ = this.productService.save({
      ...this.modelSubject.value,
      operationType: opertionalType,
      isValid: false, // Mark as draft
    });

    obs$
      .pipe(
        tap((res: IProductDto) => {
          if (opertionalType === OperationType.Create) {
            this.products.push(res);
          } else {
            const index = this.products.findIndex((p) => p.pkId === res.pkId);
            this.products[index] = res;
          }
          this.products$ = of([...this.products]);
          this.$cd.detectChanges();
          this.modelSubject.next(this.getEmptyProduct());
        })
      )
      .subscribe();
  }

  edit(product: IProductDto): void {
    this.modelSubject.next({ ...product, operationType: OperationType.Update });
  }

  delete(product: IProductDto): void {
    const obs$ = this.productService.save({
      ...product,
      operationType: OperationType.Delete,
    });

    obs$
      .pipe(
        tap((res: IProductDto) => {
          const index = this.products.findIndex((p) => p.pkId === res.pkId);
          if (index !== -1) {
            this.products.splice(index, 1); // ✅ removes the item at index
            this.products$ = of([...this.products]); // ✅ emit new value
          }
          this.$cd.detectChanges();
          this.modelSubject.next(this.getEmptyProduct());
        })
      )
      .subscribe();
  }

  disCardDraft(product: IProductDto): void {
    const obs$ = this.productService.discardDraft({
      ...product,
    });

    obs$
      .pipe(
        tap((res: IProductDto) => {
          if (!res) {
            const index = this.products.findIndex(
              (p) => p.pkId === product.pkId
            );
            if (index !== -1) {
              this.products.splice(index, 1);
               this.products$ = of([...this.products]);
            }
          } else {
            const index = this.products.findIndex((p) => p.pkId === res.pkId);
            if (index !== -1) {
              this.products[index] = res; // ✅ updates the item at index
              this.products$ = of([...this.products]); // ✅ emit new value
            }
          }
          this.$cd.detectChanges();
          this.modelSubject.next(this.getEmptyProduct());
        })
      )
      .subscribe();
  }
}
