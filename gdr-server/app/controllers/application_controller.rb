class ApplicationController < ActionController::API

  helpers do
    # Just a mocked up current_user at this point.
    def current_user
      User.first
    end
  end
end
