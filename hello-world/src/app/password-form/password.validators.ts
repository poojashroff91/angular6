import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class PasswordValidators {

    static shouldMatchOldPassword(control : AbstractControl) : Promise < ValidationErrors | null > {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== '1234') 
                    resolve({shouldMatchOldPassword: true});
                else 
                    resolve(null);
                }
            , 2000);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value){
            return { passwordsShouldMatch: true};
        }

        return null;
    }
}
