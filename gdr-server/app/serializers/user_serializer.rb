class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email, :phone, :admin, :organization
end
