Projects.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  slug: {
    type: String,
    label: 'this will be the url of the project post'
  },
  content: orion.attribute('summernote', {
      label: 'Body'
    }
  ),
  updatedAt: orion.attribute('updatedAt')
}));
