class QuizzesController < ApplicationController

  def home
    if current_user
      @id = current_user.id
      @user_quizzes = Quiz.where(user_id: @id)
    end
      @trivia = Quiz.where(author: "trivia")
      @customs = Quiz.where(custom: true)
      @quiz = Quiz.last
  end

  def show
    quiz = Quiz.find(params[:id])
    @selection = quiz.get_question
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @selection }
   end
  end

  def new
    @quiz = Quiz.new
  end

  def create
    @quiz = Quiz.new(quiz_params)
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

  def quiz_params
   params.require(:quiz).permit(:category, :name, :user_id, :custom, :author)
  end

end
