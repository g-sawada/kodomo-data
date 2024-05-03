class StaticPagesController < ApplicationController
  def index
  end

  def population
    render 'static_pages/population'
  end

  def otoshidama
    render 'static_pages/otoshidama'
  end
end
