class AddPrivateQuiz < ActiveRecord::Migration
  def change
    add_column :quizzes, :private, :string
  end
end
