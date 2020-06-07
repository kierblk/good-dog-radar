class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :contact_person
      t.string :contact_email
      t.string :contact_phone

      t.timestamps
    end
  end
end
