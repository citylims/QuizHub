# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Quiz.destroy_all
quizzes = Quiz.create([{ category: "Science", cat_id: 25}, { category: "Sports", cat_id: 42}, { category: "Television", cat_id: 67}, { category: "Animals", cat_id: 21}, { category: "Potpourriiii", cat_id: 306 }]) 



  # { category: "3 Letter Words", cat_id: 105}, { category: "People"}, { category: "Mythology"}])
