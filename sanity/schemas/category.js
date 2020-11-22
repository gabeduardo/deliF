import { FaCertificate as icon } from 'react-icons/fa';

export default {
  name: 'category',
  title: 'Categoría',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Nombre de la categoría',
      type: 'string',
      description: 'El nombre de la categoría',
    },

    {
      name: 'available',
      title: 'disponible',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
};
