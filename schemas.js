use strict;

var mongoose = require(mongoose);
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	first-Name: {
		type: String,
		require: true
	},
	last-Name: {
		type: String,
		require: true
	}
})

model.exports = mongoose.model('User', UserSchema);

var BioSchema = new Schema({
	username: {
		type: Schema.ObjectId,
		ref: User
	},
	profession: {
		type: String,
		required: true
	}
	interestedIn: [String],
	experience: String,
	profilePic: {
		data: Buffer,
		contentType: String
	},
	bioLink: {
		type: String,
		required: true,
		unique: true
	}
})

model.exports = mongoose.model("Bio", BioSchema);

var CatergorySchema = new Schema({
	categoryId: {
		type: String,
		required: true,
		unique: true
	},
	info: String
})

model.exports = mongoose.model("Category", CatergorySchema);


var RecommendationSchema = new Schema({
	recommendationId: {
		type: String,
		required: true
	},
	categories: [type: Schema.ObjectId, ref: Category]
})

model.exports = mongoose.model("Recommendation", RecommendationSchema);

var TagSchema = new Schema({
	tagId:  {
		type: String,
		required: true,
		unique:true
	},
	username: {
		type: Schema.ObjectId,
		ref: User
	},
	bioLink: {
		type: Schema.ObjectId,
		ref: Bio
	}
})

model.exports = mongoose.model("Tag", TagSchema);


var VideoSchema = new Schema({
	videoId: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: Schema.ObjectId,
		ref: User
	},
	tags: [type: Schema.ObjectId, ref: Tag],
	categories: [type: Schema.ObjectId, ref: Category]
})

model.exports = mongoose.model("Video", VideoSchema);


var DashboardSchema = new Schema({
	username: {
		type: Schema.ObjectId,
		ref: User
	},
	recommendationId: {
		type: Schema.ObjectId,
		ref: Recommendation
	},
	videos: [type: Shema.ObjectId, ref: Video]
})

model.exports = mongoose.model("Dashboard", DashboardSchema);













































