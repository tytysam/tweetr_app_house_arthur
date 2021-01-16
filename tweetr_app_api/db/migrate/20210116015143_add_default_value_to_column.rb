class AddDefaultValueToColumn < ActiveRecord::Migration[6.1]
  def change
    change_column_default :tweets, :title, Faker::Book.title
    change_column_default :tweets, :content, Faker::Hipster.sentence(word_count: 4, supplemental: false, random_words_to_add: 5)
    change_column_default :tweets, :author, Faker::Ancient.titan

  end
end
