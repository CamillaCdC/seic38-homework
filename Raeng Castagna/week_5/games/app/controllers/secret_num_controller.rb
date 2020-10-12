class SecretNumController < ApplicationController
  def form
  end

  def result
    # generates a random number
    @hidden = rand(1...10)
    # pulls the form input form form.html.erb
    @guess = params[:guess].to_i
    # checks guess is correct
    # ******* has to be a better way to display this instead of true/false!
    @result = @guess == @hidden
  end
end
