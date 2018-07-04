import { Store, Action } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';

export interface Iwe7Editor2Interface {
    component: any;
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

    set(name: string, value: Iwe7Editor2Interface) {
        this.map.set(name, value);
    }

    create(name: string, item: any): void {
        const edit = this.map.get(name);
        const modal = this.modal.create({
            nzTitle: edit.title,
            nzComponentParams: { default: item },
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
