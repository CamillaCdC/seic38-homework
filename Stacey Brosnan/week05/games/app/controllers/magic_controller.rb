class MagicController < ApplicationController
  def magic
  end

  def result
    answers = ["It is certain.", "It is decidedly so.", "Don't count on it", "My reply is no.", "Without a doubt.", "Outlook not so good."]
    @answer = answers[rand(answers.length)]
    @answer
  end
end
