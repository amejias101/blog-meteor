Posts = new orion.collection('posts', {
	singularName: 'Post',
	pluralName: 'Posts',
	link: {
		title: 'Blog Posts'
	},
	tabular: {
		columns: [
			{data: 'title', title: 'Title'},
			{data: 'slug', title: 'Slug'},
			{data: 'updatedAt', title: 'Updated'},
			{tmpl: Meteor.isClient && Template.viewModel}
		]
	}
})
