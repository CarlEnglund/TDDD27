class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :set_config

  def set_config
    @configuration = Tmdb::Configuration.new
  end
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  helper_method :current_user
end
