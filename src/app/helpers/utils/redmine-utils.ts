import { FormGroup } from '@angular/forms';
import { redmineCustomFieldMap } from '../../constants/custom-fields.map';

export function buildRedmineCustomFields(form: FormGroup): any[] {
  const customFields: any[] = [];

  Object.keys(redmineCustomFieldMap).forEach(fieldName => {
    const fieldId = redmineCustomFieldMap[fieldName];

    // Saltar campo de Aliados comerciales (se maneja aparte)
    if (fieldId === 32) return;

    let value = form.get(fieldName)?.value;

    // Campo condicional
    if (fieldName === 'otroTipoEmpresa') {
      const tipoEmpresa = form.get('businessType')?.value;
      if (tipoEmpresa !== 'Otro') return;
    }

    if (value !== null && value !== undefined && value !== '') {
      // Si es array, convertir a string
      if (Array.isArray(value)) {
        value = value.join(', ');
      }

      // Si es booleano, convertir a "1" o "0"
      if (typeof value === 'boolean') {
        value = value ? '1' : '0';
      }

      customFields.push({
        id: fieldId,
        value: value
      });
    }
  });

  // Campo especial: Aliados comerciales (checkboxes)
  const aliados: string[] = [];
  if (form.get('hasPublicPartners')?.value) aliados.push('Público');
  if (form.get('hasPrivatePartners')?.value) aliados.push('Privado');
  if (form.get('hasMixedPartners')?.value) aliados.push('Mixto');

  if (aliados.length > 0) {
    customFields.push({
      id: 32,
      value: aliados.join(', ')
    });
  }

  return customFields;
}
