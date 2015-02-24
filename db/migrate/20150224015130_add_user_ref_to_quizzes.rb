class AddUserRefToQuizzes < ActiveRecord::Migration
  def change
    add_reference :quizzes, :user, index: true
    add_foreign_key :quizzes, :users
  end
end
