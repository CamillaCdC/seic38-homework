Rails.application.routes.draw do
#index
root :to => 'mountains#index'

#new
get '/mountains/new' => 'mountains#new', :as => 'new_mountain'

#create
post '/mountains' => 'mountains#create'


get '/mountains/:id/edit' => 'mountains#edit', :as => 'edit_mountain'

#show
get '/mountains/:id' => 'mountains#show', :as => 'mountain'

delete '/mountains/:id' => 'mountains#destroy'
end
