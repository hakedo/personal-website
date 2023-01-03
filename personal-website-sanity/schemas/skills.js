import { defineField, defineType } from 'sanity'

export default defineType({
   name: 'skills',
   title: 'Skills',
   type: 'document',
   fields: [
      defineField({
         name: 'skill',
         title: 'Skill',
         type: 'array',
         of: [{ type: 'string' }]
      }),
      defineField({
         name: 'level',
         title: 'Level',
         type: 'array',
         of: [{ type: 'string' }]
      })
   ]
})