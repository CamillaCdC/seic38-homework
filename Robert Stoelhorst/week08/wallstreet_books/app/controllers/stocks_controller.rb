class StocksController < ApplicationController
  def form
  end

  def result
    StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

    @stock_symbol = params[:stock_code].upcase
    begin
      @info = StockQuote::Stock.quote @stock_symbol
    rescue
      redirect_to '/'
    end
  end
end
