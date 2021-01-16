# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tweet.create({
  title: Faker::Book.title,
  content: Faker::Hipster.sentence(word_count: 4, supplemental: false, random_words_to_add: 5),
  author: Faker::Ancient.titan
})

# Tweet.create({
#   title: Faker::Book.title,
#   content: Faker::Hipster.sentence(word_count: 4, supplemental: false, random_words_to_add: 5),
#   author: Faker::Ancient.titan
# })

# Tweet.create({
#   title: "I'm walkin' here",
#   content: "Hey, I'm walkin' here!",
#   author: "Xila82"
# })


# Tweet.create({
#   title: "I'm walkin' here",
#   content: "Hey, I'm walkin' over  here!",
#   author: "zapfska"
# })