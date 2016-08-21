class PagesController < ApplicationController
  def home
    @user = current_user
    @reviews = Review.last(6)

  end
  def about
    @user = current_user
  end

  def landing
  end

  def profile
    @user = current_user
    @userReviews = Review.where(user_id: current_user.id)
  end

end