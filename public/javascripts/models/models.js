var app = app || {};
//define single model, like a Class in Javascript
app.PostModel = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: {
		title: '',
		content: '',
		posted: ''
	}
});

//array containing posts, hooked into model aka app.PostModl
app.PostCollection = Backbone.Collection.extend({
	model: app.PostModel,
	url: '/api'
})
//initialize post collection, attach it to Post object
app.posts = new app.PostCollection();