class User < ApplicationRecord
  has_many :pets
  belongs_to :organization
  has_many :comments
  
  has_secure_password

  validates :name, :username, :organization, presence: true
end
