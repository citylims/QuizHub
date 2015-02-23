class QuizzesController < ApplicationController

  def home
    @quizzes = Quiz.all

  end

  def show

  end

end
