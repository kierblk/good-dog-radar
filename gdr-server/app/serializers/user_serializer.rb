class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email, :phone, :organization
end
