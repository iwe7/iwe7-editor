import { NgModule } from '@angular/core';

import { Iwe7EditorBasicComponent } from './iwe7-editor2/iwe7-editor2';
import { DelonFormModule } from '@delon/form';

@NgModule({
    imports: [
        DelonFormModule
    ],
    exports: [Iwe7EditorBasicComponent],
    declarations: [Iwe7EditorBasicComponent],
    entryComponents: [Iwe7EditorBasicComponent],
})
export class Iwe7Editor2Module { }
