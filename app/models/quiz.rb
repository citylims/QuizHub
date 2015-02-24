class Quiz < ActiveRecord::Base
  has_many :questions

  def get_question
    response = HTTParty.get("http://jservice.io/api/category?id=" + self.cat_id.to_s)
    return response["clues"]
  end
  
end
