class MagicController < ApplicationController

  def magicball
    render :magicball
  end

  def magicball_result

    @answers_array = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes – definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Dont count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
    ]

    render :magicball_result
  end


end
