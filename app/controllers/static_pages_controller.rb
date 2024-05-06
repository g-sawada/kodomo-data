class StaticPagesController < ApplicationController
  def index
  end

  def subject
    render 'static_pages/subject'
  end

  def otoshidama
    render 'static_pages/otoshidama'
  end

  def fifty_meter
    render 'static_pages/fifty_meter'
  end

  def future
    render 'static_pages/future'
  end
end
