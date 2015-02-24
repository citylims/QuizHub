class QuizzesController < ApplicationController

  def home
    @quizzes = Quiz.all
    @quiz = Quiz.last
    @res = HTTParty.get("http://jservice.io/api/clues")
  end

  def show
    quiz = Quiz.find(params[:id])
    @selection = quiz.get_question
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @selection }
   end
  end

  def create

  end

  def delete

  end

end
