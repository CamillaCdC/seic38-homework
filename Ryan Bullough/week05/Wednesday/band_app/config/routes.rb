Rails.application.routes.draw do
  root :to => 'bands#index'
  resources :bands
  resources :albums
end
