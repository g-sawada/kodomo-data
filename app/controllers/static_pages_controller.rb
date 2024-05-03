class StaticPagesController < ApplicationController
  def index
  end

  def population
    render 'static_pages/population'
  end

  def otoshidama
    render 'static_pages/otoshidama'
  end

  def fifty_meter
    render 'static_pages/fifty_meter'
  end
end
