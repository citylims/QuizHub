# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Quiz.destroy_all
quizzes = Quiz.create([{ category: "Science", cat_id: 25, custom: true}, { category: "Sports", cat_id: 42, custom: false}, { category: "Television", cat_id: 67, custom: false}, { category: "Animals", cat_id: 21, custom: false}, { category: "Potpourriiii", cat_id: 306, custom: false}, { category: "US Cities", cat_id: 7, custom: false}, { category: "History", cat_id: 114, custom: false}, { category: "Pop Music", cat_id: 770, custom: false}, { category: "Brand Names", cat_id: 2537, custom: false}, { category: "World Capitals", cat_id: 78, custom: false}, { category: "Mythology", cat_id: 680, custom: false}]) 



  # { category: "3 Letter Words", cat_id: 105}, { category: "People"}, { category: "Mythology"}])
