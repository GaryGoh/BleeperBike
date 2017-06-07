class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :mobile?, :ios?, :android?, :getDevice

  private

  def mobile? # has to be in here because it has access to "request"
    request.user_agent =~ /\b(Android|iPhone|iPad|Windows Phone|Opera Mobi|Kindle|BlackBerry|PlayBook)\b/i
  end

  def ios?
    request.user_agent =~ /\b(iPhone|iPad)\b/i
  end

  def android?
    request.user_agent =~ /\b(Android)\b/i
  end

  def getDevice
    UserAgent.parse(request.user_agent).platform
  end
end
