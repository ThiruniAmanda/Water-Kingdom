import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerFooterComponent } from './customer-footer.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ CustomerFooterComponent ],
    exports: [ CustomerFooterComponent ]
})

export class CustomerFooterModule {}
