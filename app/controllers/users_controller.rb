class UsersController < ApplicationController
  protect_from_forgery

  def profile
    @id = current_user.id
    @user_quizzes = Quiz.where(private: "Public", user_id: @id)
    @private_quizzes = Quiz.where(private: "Private", user_id: @id)
  end

end
