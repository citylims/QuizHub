class QuestionsController < ApplicationController

  def index
    @quiz = Quiz.find_by_id(params[:quiz_id])

  end

  def show

  end

  def new
    @quiz = Quiz.find_by_id(params[:quiz_id])
    @question = Question.new

  end

  def create
    @question = Quiz.new(question_params)
    if @quiz.save
      redirect_to :action => :home
    else
      render 'new'
    end
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def question_params
   params.require(:question).permit(:question, :answer)
  end

end
