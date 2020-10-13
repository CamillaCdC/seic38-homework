Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/games' => 'pages#games'

  get '/magic_eight_ball' => 'magic_eight_ball#form'
  get '/magic_eight_ball/result' => 'magic_eight_ball#result' # need to make logic and html.erb

  get '/secret_number' => 'secret_number#form'
  get '/secret_number/result' => 'secret_number#result' # need to make logic and html.erb

  get '/rock_paper_scissors' => 'rock_paper_scissors#form'
  # get '/rock_paper_scissors/throw' => 'rock_paper_scissors#result'
end
  # Create a route that goes from /games/rock_paper_scissors/:throw to games#rock_paper_scissors_play


# i.e. If a user throws rock http://localhost:3000/games/rock_paper_scissors/rock and the server picks rock player wins! (Yes, I know that is not how RPS works) Bonus: Set the win or lose condition based on the real rules of Rock Paper Scissors.
