class PagesController < ApplicationController
  def home
    render :home
  end

  def magic8ball
    @question = params[:question]
    @answer = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful'
    ].sample

    @final_answer
    @final_answer = @answer unless @question.to_s.empty?
  end

  def secret_number
    cookies[:number] = rand 10 if cookies[:number].nil?
    @random_number = cookies[:number].to_i
    @guess = params[:guess]
    if !@guess.to_s.empty? && @random_number == @guess.to_i
      @result = 'Correct! You win!'
      cookies.delete :number
    elsif !@guess.to_s.empty? && @random_number > @guess.to_i
      @result = 'Nope, guess higher'
    elsif !@guess.to_s.empty? && @random_number < @guess.to_i
      @result = 'Nope, guess lower'
    end
  end
end
