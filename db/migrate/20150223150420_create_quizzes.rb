class CreateQuizzes < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.string :category
      t.timestamps null: false
    end
  end
end
