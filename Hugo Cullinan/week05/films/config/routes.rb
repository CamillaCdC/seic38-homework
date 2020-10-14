Rails.application.routes.draw do
  get '/films' => 'films#index'
  get '/films/new' => 'films#new', :as => 'new_film'
  post '/films' => 'films#create'
  get '/films/:id' => 'films#show', :as => 'film'
  get '/films/:id/edit' => 'films#edit', :as => 'edit_film'
  post '/films/:id' => 'films#update'
  delete '/films/:id' => 'films#destroy'
end
