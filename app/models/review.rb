class Review < ActiveRecord::Base
  belongs_to  :user
  validates :score, presence: true
end
