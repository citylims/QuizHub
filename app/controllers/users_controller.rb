class UsersController < ApplicationController
  protect_from_forgery

  def profile
    @id = current_user.id
    @user_quizzes = Quiz.where(user_id: @id)
  end

end
