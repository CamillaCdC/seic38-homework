Rails.application.routes.draw do
  get '/courses' => 'courses#index'
  get '/courses/new' => 'courses#new', :as => 'new_course'
  post '/courses' => 'courses#create'
  get '/courses/:id' => 'courses#show', :as => 'course'
  get '/courses/:id/edit' => 'courses#edit', :as => 'edit_course'
  post '/courses/:id' => 'courses#update'
  delete '/courses/:id' => 'courses#destroy'
end
