class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.integer :organization_id
      t.integer :user_id
      t.string :name
      t.string :breed
      t.date :birthdate
      t.string :photo

      t.timestamps
    end
  end
end
