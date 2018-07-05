import { Iwe7EditorBasicComponent } from './iwe7-editor2/iwe7-editor2';
import { Store, Action } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Type } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';

export interface Iwe7Editor2Interface {
    component: Type<any>;
    action: (val: any) => Action;
    title: string;
}

@Injectable({
    providedIn: 'root'
})
export class Iwe7Editor2Service {
    map: Map<string, Iwe7Editor2Interface> = new Map();
    constructor(
        public modal: NzModalService,
        public store: Store<any>
    ) { }

    setDefault(title: string, code: string, action: (val: any) => Action) {
        this.map.set(code, {
            title: title,
            action: action,
            component: Iwe7EditorBasicComponent
        });
    }

    set(name: string, value: any) {
        this.map.set(name, value);
    }

    create(name: string, item: any, schema?: SFSchema, ui?: SFUISchema): void {
        const edit = this.map.get(name);
        const nzComponentParams = {};
        nzComponentParams['default'] = item;
        if (schema) {
            nzComponentParams['schema'] = schema;
        }
        if (ui) {
            nzComponentParams['ui'] = ui;
        }
        const modal = this.modal.create({
            nzTitle: edit.title,
            nzComponentParams: nzComponentParams,
            nzContent: edit.component,
            nzFooter: [{
                label: '保存',
                type: 'primary',
                onClick: (ins: any) => {
                    const val = ins.value;
                    if (val) {
                        this.store.dispatch(edit.action(val));
                    }
                    modal.close();
                }
            }]
        });
    }
}
