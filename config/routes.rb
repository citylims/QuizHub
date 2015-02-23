Rails.application.routes.draw do
  root 'quizzes#home'

  match "/auth/:provider/callback" => "sessions#create", via: [:get]

  match "/signout" => "sessions#destroy", :as => :signout, via: [:get]

  resources :quizzes, only: [:home, :show]

end
