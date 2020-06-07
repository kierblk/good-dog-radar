class AddAdminRoleToPet < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :admin, :boolean
  end
end
