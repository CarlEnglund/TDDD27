require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "should not save review without id" do
    user = User.new
    assert_not user.save
  end
end
