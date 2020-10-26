class SecretNumberController < ApplicationController
  def guess
  end
end

@secret_number = Random.rand 0..10


  def win
    if @secret_number == params[:numbers][:id].to_i
      render :win
    end
    end

    def lose
      if @secret_number != params[:numbers][:id].to_i
        render :lose
    end
    end
