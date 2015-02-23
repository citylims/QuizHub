class AddColumnToQuizzes < ActiveRecord::Migration
  def change
    add_column :quizzes, :cat_id, :integer
  end
end
