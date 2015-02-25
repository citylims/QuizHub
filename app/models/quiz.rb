class Quiz < ActiveRecord::Base
  has_many :questions, dependent: :destroy
  belongs_to :user
  validates :category, :name, :author, presence: true
  validates :name, uniqueness: true

  def get_question
    response = HTTParty.get("https://jservice.io/api/category?id=" + self.cat_id.to_s)
    return response["clues"]
  end
end
