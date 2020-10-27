class SecretController < ApplicationController

  def pick_num
    @num = rand(1..10)
    

  end




end
