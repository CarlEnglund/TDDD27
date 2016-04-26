class PagesController < ApplicationController
  def home
    @user = current_user
    @reviews = Review.all
  end
  def about
    @user = current_user
  end

  def landing
  end

end