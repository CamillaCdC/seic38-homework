# making the array outside the class, just as the class be clean.
@@answer_array = ['It is certain.', 'As I see it, yes.', 'Reply hazy, try again.',
                "Don't count on it.",'It is decidedly so.','Most likely.','Ask again later.',
                'My reply is no.','Without a doubt.','Outlook good.','Better not tell you now.',
                'My sources say no.','Yes – definitely.','Yes.','Cannot predict now.','Outlook not so good.',
                'You may rely on it.','Signs point to yes.','Concentrate and ask again.','Very doubtful.']

class Magic8Controller < ApplicationController

  # render :magic8
  def magic8
  end

  # render :form
  def form
  end

  # taking the name and question and make a simple dialogue with the player
  def result
    @name = params[:name]
    @question = params[:question]
    @rand_answer = @@answer_array.sample
  end
end
