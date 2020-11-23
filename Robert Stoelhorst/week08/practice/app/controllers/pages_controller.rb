class PAgesController < ApplicationController
  def home
  end

  def numbers
    @amount = 223
    @large_number = 4349876
    @phone = 2125551212
  end

  def text
    @number = (1..20).to_a.shuffle
    @story = "A very very very very blah blah blah blah blah blah blah blah blah shit sktu shit shiy shot shoot"
    @friend_count = 1
    @enemy_count = 15
end

def assets
  @asset
 end
end
