Rails.application.routes.draw do
  get '/beaches' => 'beaches#index'
  get '/beaches/new' => 'beaches#new', :as => 'new_beach'
  post '/beaches' => 'beaches#create'
  end
