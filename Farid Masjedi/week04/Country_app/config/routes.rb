Rails.application.routes.draw do
  # to read the home page
  root :to => 'pages#home'
  # to post a new country to the home page
  post '/' => 'pages#create'
  # to read the new page for making a new country
  get '/new' => 'pages#new'
  # to read each country page
  get '/:id' => 'pages#country', :as => 'country'
  # to read the edit page
  get '/:id/edit' => 'pages#edit', :as => 'edit'
  # to post the udpated edit to the country page
  post '/:id' => 'pages#update'
  # to delete a country page
  delete '/:id' => 'pages#delete'
end
