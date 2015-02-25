class RemovePrivateFromQuizzes < ActiveRecord::Migration
  def change
    remove_column :quizzes, :private
  end
end
