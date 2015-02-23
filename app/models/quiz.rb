class Quiz < ActiveRecord::Base
  has_many :questions


  def get_question
    # url = "http://api.giphy.com/v1/gifs/search?q=" + self.mood.name + "&api_key=dc6zaTOxFJmzC"
    # response = HTTParty.get(url)
    response = HTTParty.get("http://jservice.io/api/category?id=" + self.cat_id.to_s)
    return response[0][1]
  end
end
