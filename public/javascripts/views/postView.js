var app = app || {};
//view single post
app.PostView = Backbone.View.extend({
	//each post needs to be in its own new element
	tagName: 'li',
	//find the element, pass it through underscore templating language
	template: _.template( $('#post-template').html() ),
	events: {
		'click .delete': 'deletePost'
	},
	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function() {
		//jq object represents DOM element that's been created for postView, using tag name to speciffy
		//this function just creates a reference to the DOM element
		this.$el.html(this.template(
			this.model.toJSON()
		));
		//returning this is what allows you to actually update the view
		return this;
	},
	deletePost: function(){
		this.model.destroy();
	}
})