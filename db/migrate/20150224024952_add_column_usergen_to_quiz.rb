class AddColumnUsergenToQuiz < ActiveRecord::Migration
  def change
    add_column :quizzes, :custom, :boolean
  end
end
