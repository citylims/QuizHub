# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Quiz.destroy_all
quizzes = Quiz.create([{ category: "Science", name: "Science", author: "trivia", cat_id: 25, custom: false}, { category: "Sports", name: "Sports", author: "trivia", cat_id: 42, custom: false, }, { category: "Television", name: "Television", author: "trivia", cat_id: 67, custom: false}, { category: "Animals", name: "Animals", author: "trivia", cat_id: 21, custom: false}, { category: "Potpourriiii", name: "Potpourriiii", author: "trivia", cat_id: 306, custom: false}, { category: "US Cities", name: "US Cities", author: "trivia", cat_id: 7, custom: false}, { category: "History", name: "History", cat_id: 114, custom: false}, { category: "Pop Music", name: "Pop Music", author: "trivia", cat_id: 770, custom: false}, { category: "Brand Names", name: "Brand Names", author: "trivia", cat_id: 2537, custom: false}, { category: "World Capitals", name: "World Capitals", author: "trivia", cat_id: 78, custom: false}, { category: "Mythology", name: "Mythology", author: "trivia", cat_id: 680, custom: false}]) 



  # { category: "3 Letter Words", cat_id: 105}, { category: "People"}, { category: "Mythology"}])
