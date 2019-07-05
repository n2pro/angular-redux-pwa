import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EProductsActions } from './types';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../model/product.model';
import { ProductsGetSuccess, ProductsGet } from './action';


@Injectable()
export class ProductsEffects {
    // tslint:disable-next-line:variable-name
    constructor(
        // tslint:disable-next-line:variable-name
        private readonly _actions$: Actions,
        private readonly catalogService: CatalogService
    ) { }

    @Effect()
    getProducts$: Observable<ProductsGetSuccess> = this._actions$.pipe(
        ofType<ProductsGet>(EProductsActions.PRODUCTS_PENDING),
        switchMap(() =>
            this.catalogService.getProducts().pipe(map((response: Product[]) => new ProductsGetSuccess(response)))
        )
    );
}
