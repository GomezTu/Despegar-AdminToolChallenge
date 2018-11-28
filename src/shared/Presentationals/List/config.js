import ButtonsColumn from '../../Components/Grid/Columns/ButtonsColum';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

export const columnsConfig = [
  {
    title: 'Nombre',
    width: 3,
    content: ['name'],
  },
  {
    title: 'Direccion',
    width: 3,
    content: ['address'],
  },
  {
    title: 'Telefono',
    width: 3,
    content: (r) => { return r.phoneNumber },
  },
  {
    title: '',
    width: 2,
    component: ButtonsColumn,
    config: [
      {
        label: '',
        name: 'edit',
        icon: FaPencilAlt,
        buttonType: 'info',
      },
      {
        label: '',
        name: 'delete',
        icon: FaTrash,
        buttonType: 'danger',
      },
    ],
  },
];