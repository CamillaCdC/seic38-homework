class MagicController < ApplicationController


def question
    render :magic
  end

def result
  @game = [
  "It is certain.",
  "It is decidedly so.",
   "Without a doubt.",
  "Yes – definitely.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."]

    @magicresult = @game.sample
  render :magicresult
  end
end
