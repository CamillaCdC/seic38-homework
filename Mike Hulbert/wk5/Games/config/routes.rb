Rails.application.routes.draw do
  root to: 'pages#home'
  get '/magic8ball' => 'pages#magic8ball'
  get '/secret_number' => "pages#secret_number"
end
