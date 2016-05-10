class PagesController < ApplicationController
  def home
    @user = current_user
    @reviews = Review.last(5)
    @userReviews = Review.where(user_id: current_user.id)

  end
  def about
    @user = current_user
  end

  def landing
  end

end