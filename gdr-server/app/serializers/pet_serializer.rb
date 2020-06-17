class PetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :breed, :birthdate, :photo
end
