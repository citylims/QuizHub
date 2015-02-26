Rails.application.routes.draw do
  root 'quizzes#home'

  match "/auth/:provider/callback" => "sessions#create", via: [:get]

  match "/signout" => "sessions#destroy", :as => :signout, via: [:get]

  resources :quizzes do
    resources :questions
  end

  match "custom/:id" => "quizzes#custom", :as => :custom, via: [:get]

  match "profile/:id" => "users#profile", :as => :profile, via: [:get]

end
