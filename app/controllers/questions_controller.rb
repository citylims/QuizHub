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
    @question = Question.new(question_params)
    if @question.save
      redirect_to :action => :index
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
   params.require(:question).permit(:question, :answer, :quiz_id)
  end

end
