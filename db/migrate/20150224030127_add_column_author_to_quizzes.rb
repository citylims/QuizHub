class AddColumnAuthorToQuizzes < ActiveRecord::Migration
  def change
    add_column :quizzes, :author, :string
  end
end
