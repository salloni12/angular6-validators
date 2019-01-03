import {Validator, NG_VALIDATORS} from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector:['advs-compare'],
    providers:[{provide:NG_VALIDATORS,userExisting:compareDirective,multi:true}]
})