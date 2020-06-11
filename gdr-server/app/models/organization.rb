class Organization < ApplicationRecord
  has_many :pets
  has_many :users
  has_many :comments, through: :pets
end
