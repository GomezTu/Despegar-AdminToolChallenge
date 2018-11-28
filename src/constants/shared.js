import Input from '../shared/Components/Input/Input';
import TextArea from '../shared/Components/TextArea/TextArea';

export const filtersConfig = [
  {
    isSelected: true,
    label: 'Nombre',
    name: 'name',
    type: 'text',
    placeholder: 'Filtre por Nombre',
  },
  {
    isSelected: true,
    label: 'Direccion',
    name: 'address',
    type: 'text',
    placeholder: 'Filtre por direccion',
  },
  {
    isSelected: false,
    label: 'Telefono',
    name: 'phone',
    type: 'text',
    placeholder: 'Filtre por telefono',
  },
];

export const inputsForm = [
  {
    label: 'Nombre',
    name: 'name',
    isRequired: true,
    length: 50,
    component: Input,
  },
  {
    label: 'Telefono',
    name: 'phoneNumber',
    type: 'tel',
    isRequired: false,
    length: 20,
    component: Input,
  },
  {
    label: 'Descripcion',
    name: 'description',
    isRequired: true,
    length: 1000,
    component: TextArea,
  },
  {
    label: 'Especialidades',
    name: 'specialty',
    isRequired: false,
    length: 500,
    component: TextArea,
  },
  {
    label: 'Direccion',
    name: 'address',
    isRequired: true,
    length: 50,
    component: Input,
  },
  // {
  //   label: 'Horario de atencion',
  //   name: 'time',
  //   isRequired: true,
  //   length: 50,
  // },
];