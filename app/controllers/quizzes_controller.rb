class QuizzesController < ApplicationController

  def home
    @quizzes = Quiz.all
    @quiz = Quiz.last
    # @res = HTTParty.get("http://jservice.io/api/random")
    @res = HTTParty.get("http://jservice.io/api/clues")
    i = 0
    # @response = @res[0]["question"]
  end

  def show

  end

end
