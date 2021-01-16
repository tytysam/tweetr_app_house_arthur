class MetaController < ApplicationController

  def about

    render json: { author: "Tyler and Candice :)", last_updated: "15 Jan 2021" }

  end

end