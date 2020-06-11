class Pet < ApplicationRecord
  belongs_to :organization
  belongs_to :user
  has_many :comments

end
