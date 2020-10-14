class SecretController < ApplicationController

  def pick_num
    @num = rand(1..10)
    puts 'You win!'

  end




end
