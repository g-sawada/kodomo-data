Rails.application.routes.draw do
  get 'static_pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "static_pages#index"

  get '/subject' => 'static_pages#subject'
  get '/otoshidama' => 'static_pages#otoshidama'
  get '/fifty_meter' => 'static_pages#fifty_meter'
  get '/future' => 'static_pages#future'
  get '/uonzu' => 'static_pages#uonzu'
end
