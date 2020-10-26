Rails.application.routes.draw do
  root :to => 'albums#index'
  resources :singers
  resources :albums
end
