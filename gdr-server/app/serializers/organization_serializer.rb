class OrganizationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :contact_person, :contact_email, :contact_phone, :users
end
