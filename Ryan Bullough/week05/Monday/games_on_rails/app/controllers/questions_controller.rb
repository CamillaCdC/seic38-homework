class QuestionsController < ApplicationController
  def main
  end
  def answer
    @possible_answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - Definitely", " You may rely on it",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict right now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "I'm sick of typing this shit", "Please let me out", "I'm trapped, send help"]
  end
end
