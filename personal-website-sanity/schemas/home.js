import { defineField, defineType } from 'sanity'

export default defineType({
   name: 'home',
   title: 'Home',
   type: 'document',
   fields: [
      defineField({
         name: 'text',
         title: 'Text',
         type: 'text',
      }),
      defineField({
         name: 'mainImage',
         title: 'Main image',
         type: 'image',
         options: {
            hotspot: true,
         },
      })
   ]
})