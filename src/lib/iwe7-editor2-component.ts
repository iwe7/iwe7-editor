import { SFSchema, SFUISchema } from '@delon/form';
export abstract class Iwe7Editor2Component<T> {
    public value: T;
    schema: SFSchema = {
        properties: {}
    };
    ui: SFUISchema = {};
    default: T;
    constructor() { }
    formChange(val: T) {
        this.value = val;
    }
}
