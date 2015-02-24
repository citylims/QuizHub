class QuizzesController < ApplicationController

  def home
    @id = current_user.id
    @quizzes = Quiz.all
    @customs = Quiz.where(custom: true)
    @user_quizzes = Quiz.where(user_id: @id)
    @quiz = Quiz.last

    # @res = HTTParty.get("http://jservice.io/api/clues")
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

  def delete

  end

  private

  def quiz_params
   params.require(:quiz).permit(:category, :name, :user_id, :custom, :author)
 end

end
