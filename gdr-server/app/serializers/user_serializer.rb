class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email, :phone, :admin
  attribute :org_info do |user| 
    {
      name: user.organization.name,
      contact: user.organization.contact_person,
      phone: user.organization.contact_phone,
      email: user.organization.contact_email
    }
  end
end
