require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  test "should not save review without id" do
    review = Review.new
    assert_not review.save
  end
end
