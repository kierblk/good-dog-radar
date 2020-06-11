class User < ApplicationRecord
  has_many :pets
  belongs_to :organization
  has_many :comments
  
  has_secure_password
end
