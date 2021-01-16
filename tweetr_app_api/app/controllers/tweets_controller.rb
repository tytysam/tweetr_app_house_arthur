class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all

    render(json: @tweets, status: 200)
  end

  def show
    tweet = Tweet.find(params[:id])
    render(json: { tweet: tweet }, status: 200)
  end

  def create
    tweet = Tweet.new(tweet_params)

    if tweet.save
      render(json: {tweet: tweet}, status: 201)
    else
      render(json: {tweet: tweet, errors: tweet.errors}, status: 422 )
    end

  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update(tweet_params)

    render(json: {tweet: tweet}, status: 200)

  end
  
  private

  def tweet_params
    params.require(:tweet).permit(:title, :content, :author)
  end
end