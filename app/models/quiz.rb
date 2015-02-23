class Quiz < ActiveRecord::Base
  has_many :questions


  def get_question
    # url = "http://api.giphy.com/v1/gifs/search?q=" + self.mood.name + "&api_key=dc6zaTOxFJmzC"
    # response = HTTParty.get(url)
    response = HTTParty.get("http://jservice.io/api/random")
    return response[0]["question"]
  end
end
