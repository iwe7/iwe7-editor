import { SFUISchema, SFSchema } from '@delon/form';
import { Component, OnInit } from '@angular/core';
import { Iwe7Editor2Component } from '../iwe7-editor2-component';

@Component({
    selector: 'iwe7-editor2',
    templateUrl: 'iwe7-editor2.html',
    styleUrls: ['./iwe7-editor2.scss']
})

export class Iwe7EditorBasicComponent extends Iwe7Editor2Component<any> implements OnInit {
    schema: SFSchema = {
        properties: {}
    };
    ui: SFUISchema = {};
    constructor() {
        super();
    }
    ngOnInit() { }
}
