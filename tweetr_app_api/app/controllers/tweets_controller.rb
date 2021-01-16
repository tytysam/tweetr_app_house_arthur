class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all

    render(json: @tweets, status: 200)
  end

  def show
    tweet = Tweet.find(params[:id])
    render(json: { tweet: tweet }, status: 200)
  end
  
end