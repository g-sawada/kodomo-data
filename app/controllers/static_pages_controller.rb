class StaticPagesController < ApplicationController
  def index
  end

  def react
    render 'static_pages/react_test'
  end
end
