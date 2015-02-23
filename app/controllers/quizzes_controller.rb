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
    @quiz = Quiz.find(params[:id])
    @cat_id = @quiz.cat_id
    @res = HTTParty.get("http://jservice.io/api/category?id=" + @cat_id.to_s)
    @selection = @res["clues"]
    # @question = @selection["question"]
    # @answer = @selection["answer"]
    # @body = @res.body["question"]
    # @obj = JSON.parse(@res.body)["question"]
    respond_to do |format|
     format.html { render :show }
     format.json { render json: @selection }
   end

  end

end
