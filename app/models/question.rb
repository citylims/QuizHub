class Question < ActiveRecord::Base
  belongs_to :quiz
  validates :question, :answer, presence: true
end
