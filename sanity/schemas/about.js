import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'about',
  title: 'Portada',
  type: 'document',
  icon,
  fields: [
    {
      name: 'titulo',
      title: 'Título imagen',
      type: 'string',
      description: 'Título de la sección destacada',
    },

    {
      name: 'image',
      title: 'image',
      type: 'image',
      description: 'Imagen destacada',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Descripcion ',
      type: 'text',
      description: 'Primer párrafo sección destacada',
    },
    {
      name: 'description2',
      title: 'Descripcion2 ',
      type: 'text',
      description: 'Segundo párrafo sección destacada',
    },
    {
      name: 'link',
      title: 'Botón Cheesecake',
      type: 'reference',
      weak: true,
      to: [{ type: 'cheesecake' }],
    },
  ],
};
