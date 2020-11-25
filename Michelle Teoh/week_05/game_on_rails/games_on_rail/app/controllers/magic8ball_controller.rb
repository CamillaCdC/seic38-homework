class Magic8ballController < ApplicationController
  def form
    render :form
  end

  def result
    render :result
  end
end
