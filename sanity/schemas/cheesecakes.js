import { MdCake as icon } from 'react-icons/md';

export default {
  name: 'cheesecake',
  title: 'cheesecakes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Cheesecake name',
      type: 'string',
      description: 'The name of the cheesecake',
    },

    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },

    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Descripción de la cheesecake',
    },
    {
      name: 'price',
      title: 'price',
      type: 'number',
      description: 'precio unitario de la cheesecake',
    },

    {
      name: 'category',
      title: 'categoría de la cheesecake',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
  ],
};
