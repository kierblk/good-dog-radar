# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_org = Organization.create({
  name: "Org 1",
  contact_person: "Sara",
  contact_email: "sara@email.com",
  contact_phone: "123-456-7890"
})

radar = Pet.create({
  name: "Radar",
  breed: "Bull Terrier",
  user_id: 1,
  organization_id: 1
})

sara = User.create({
  name:"Sara",
  email: "sara@email.com",
  phone: "123-456-7890",
  admin: true,
  organization_id: 1,
  username: "sara",
  password: "password"
})