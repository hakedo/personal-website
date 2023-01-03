import { defineField, defineType } from 'sanity'

export default defineType({
   name: 'about',
   title: 'About',
   type: 'document',
   fields: [
      defineField({
         name: 'content',
         title: 'Content',
         type: 'text',
      }),
      defineField({
         name: 'aboutImage',
         title: 'About Image',
         type: 'image',
         options: {
            hotspot: true,
         },
      })
   ]
})
