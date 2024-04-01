const City = require('./City');
const Hotel = require('./Hotel');
const Image = require('./Image');
const Booking = require('./Booking');
const User = require('./User');
const Review = require('./Review');


Hotel.belongsTo(City)
City.hasMany(Hotel)

Hotel.hasMany(Image)
Image.belongsTo(Hotel)

Review.belongsTo(Hotel)
Hotel.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

Booking.belongsTo(User)
User.hasMany(Booking)

Booking.belongsTo(Hotel)
Hotel.hasMany(Booking)