class User < ActiveRecord::Base
  has_many :quizzes
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth['info']['nickname']
    end
  end
end
