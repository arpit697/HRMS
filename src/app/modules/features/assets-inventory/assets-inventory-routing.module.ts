import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsInventoryComponent } from './assets-inventory.component';
import {
  MY_ASSETS_INVENTORY,
  REQUEST_ASSET,
  ASSET_DECLARATION,
} from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: AssetsInventoryComponent,
    children: [
      {
        path: MY_ASSETS_INVENTORY.path,
        loadChildren: () =>
          import('./my-assets-inventory/my-assets-inventory.module').then(
            (m) => m.MyAssetsInventoryModule
          ),
      },
      {
        path: REQUEST_ASSET.path,
        loadChildren: () =>
          import('./request-asset/request-asset.module').then(
            (m) => m.RequestAssetModule
          ),
      },
      {
        path: ASSET_DECLARATION.path,
        loadChildren: () =>
          import('./asset-declaration/asset-declaration.module').then(
            (m) => m.AssetDeclarationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetsInventoryRoutingModule {}
