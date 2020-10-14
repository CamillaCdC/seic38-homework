Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => 'guitars#index'
get '/guitars' => 'guitars#index'
get '/guitars/new' => 'guitars#new', :as => 'guitar/new'
post '/guitars' => 'guitars#create'
get '/guitars/:id' => 'guitars#show', :as => 'guitar'
get '/guitars/:id/edit' => 'guitars#edit', :as => 'edit_guitar'
post 'guitars/:id/' => 'guitars#update'
delete 'guitars/:id' => 'guitars#destroy'
end
