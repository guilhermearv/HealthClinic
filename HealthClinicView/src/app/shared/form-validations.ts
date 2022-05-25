import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
  static AtLeastOnePhone(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        return null;
      }

      field.setErrors(null);
      formControl.setErrors(null);

      if (!field.value && !formControl.value) {
        field.setErrors({incorrect: true});
        formControl.setErrors({incorrect: true});
        return { AtLeastOnePhone : otherField };
      }

      return null;
    };
    return validator;
  }
}
