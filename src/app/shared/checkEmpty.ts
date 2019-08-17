import {AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms'

export function checkEmpty():ValidatorFn{
 return (control:AbstractControl):ValidationErrors|null=>{
    if(control.value==null||control.value.length==0){
        console.log(control.value.length)
        return {'isError':true};
    }
    console.log(control.value)
    return null;
 }
  
       
    }
